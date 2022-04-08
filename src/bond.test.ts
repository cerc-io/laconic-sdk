import { Registry } from './index';
import { getConfig } from './testing/helper';

const { chainId, restEndpoint, gqlEndpoint, privateKey, accountAddress, fee } = getConfig();

jest.setTimeout(90 * 1000);

const bondTests = () => {
  let registry: Registry;
  let bondId1: string;

  let bondOwner: string;

  beforeAll(async () => {
    registry = new Registry(restEndpoint, gqlEndpoint, chainId);
  });

  test('Create bond.', async () => {
    bondId1 = await registry.getNextBondId(accountAddress);
    expect(bondId1).toBeDefined();
    await registry.createBond({ denom: 'aphoton', amount: '1000000000' }, accountAddress, privateKey, fee);
  })

  test('Get bond by ID.', async () => {
    const [bond] = await registry.getBondsByIds([bondId1]);
    expect(bond).toBeDefined();
    expect(bond.id).toBe(bondId1);
    expect(bond.balance).toHaveLength(1);
    expect(bond.balance[0]).toEqual({ type: 'aphoton', quantity: '1000000000' });
    bondOwner = bond.owner;
  });

  test('Query bonds.', async () => {
    const bonds = await registry.queryBonds();
    expect(bonds).toBeDefined();
    const bond = bonds.filter((bond: any) => bond.id === bondId1);
    expect(bond).toBeDefined();
  });

  test('Query bonds by owner.', async () => {
    const bonds = await registry.queryBonds({ owner: bondOwner });
    expect(bonds).toBeDefined();
    const bond = bonds.filter((bond: any) => bond.id === bondId1);
    expect(bond).toBeDefined();
  });

  test('Refill bond.', async () => {
    await registry.refillBond({ id: bondId1, denom: 'aphoton', amount: '500' }, accountAddress, privateKey, fee);

    const [bond] = await registry.getBondsByIds([bondId1]);
    expect(bond).toBeDefined();
    expect(bond.id).toBe(bondId1);
    expect(bond.balance).toHaveLength(1);
    expect(bond.balance[0]).toEqual({ type: 'aphoton', quantity: '1000000500' });
  });

  test('Withdraw bond.', async () => {
    await registry.withdrawBond({ id: bondId1, denom: 'aphoton', amount: '500' }, accountAddress, privateKey, fee);

    const [bond] = await registry.getBondsByIds([bondId1]);
    expect(bond).toBeDefined();
    expect(bond.id).toBe(bondId1);
    expect(bond.balance).toHaveLength(1);
    expect(bond.balance[0]).toEqual({ type: 'aphoton', quantity: '1000000000' });
  });

  test('Cancel bond.', async () => {
    await registry.cancelBond({ id: bondId1 }, accountAddress, privateKey, fee);

    const [bond] = await registry.getBondsByIds([bondId1]);
    expect(bond.id).toBe("");
    expect(bond.owner).toBe("");
    expect(bond.balance).toHaveLength(0);
  });
};

describe('Bonds', bondTests);