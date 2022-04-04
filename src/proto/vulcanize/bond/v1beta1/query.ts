// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.14.0
 * source: vulcanize/bond/v1beta1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./bond";
import * as dependency_3 from "./../../../google/api/annotations";
import * as dependency_4 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_5 from "./../../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export namespace vulcanize.bond.v1beta1 {
    export class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryParamsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.vulcanize.bond.v1beta1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Params, 1) as dependency_2.vulcanize.bond.v1beta1.Params;
        }
        set params(value: dependency_2.vulcanize.bond.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Params.prototype.toObject>;
        }) {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_2.vulcanize.bond.v1beta1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Params.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_2.vulcanize.bond.v1beta1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
    export class QueryGetBondsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageRequest, 1) as dependency_4.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }) {
            const message = new QueryGetBondsRequest({});
            if (data.pagination != null) {
                message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.pagination !== undefined)
                writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsRequest {
            return QueryGetBondsRequest.deserialize(bytes);
        }
    }
    export class QueryGetBondsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bonds?: dependency_2.vulcanize.bond.v1beta1.Bond[];
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bonds" in data && data.bonds != undefined) {
                    this.bonds = data.bonds;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get bonds() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Bond, 1) as dependency_2.vulcanize.bond.v1beta1.Bond[];
        }
        set bonds(value: dependency_2.vulcanize.bond.v1beta1.Bond[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_4.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            bonds?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }) {
            const message = new QueryGetBondsResponse({});
            if (data.bonds != null) {
                message.bonds = data.bonds.map(item => dependency_2.vulcanize.bond.v1beta1.Bond.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                bonds?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.bonds != null) {
                data.bonds = this.bonds.map((item: dependency_2.vulcanize.bond.v1beta1.Bond) => item.toObject());
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bonds !== undefined)
                writer.writeRepeatedMessage(1, this.bonds, (item: dependency_2.vulcanize.bond.v1beta1.Bond) => item.serialize(writer));
            if (this.pagination !== undefined)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.bonds, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.vulcanize.bond.v1beta1.Bond.deserialize(reader), dependency_2.vulcanize.bond.v1beta1.Bond));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsResponse {
            return QueryGetBondsResponse.deserialize(bytes);
        }
    }
    export class QueryGetBondByIdRequest extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            id?: string;
        }) {
            const message = new QueryGetBondByIdRequest({});
            if (data.id != null) {
                message.id = data.id;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondByIdRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondByIdRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondByIdRequest {
            return QueryGetBondByIdRequest.deserialize(bytes);
        }
    }
    export class QueryGetBondByIdResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bond?: dependency_2.vulcanize.bond.v1beta1.Bond;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bond" in data && data.bond != undefined) {
                    this.bond = data.bond;
                }
            }
        }
        get bond() {
            return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Bond, 1) as dependency_2.vulcanize.bond.v1beta1.Bond;
        }
        set bond(value: dependency_2.vulcanize.bond.v1beta1.Bond) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            bond?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>;
        }) {
            const message = new QueryGetBondByIdResponse({});
            if (data.bond != null) {
                message.bond = dependency_2.vulcanize.bond.v1beta1.Bond.fromObject(data.bond);
            }
            return message;
        }
        toObject() {
            const data: {
                bond?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>;
            } = {};
            if (this.bond != null) {
                data.bond = this.bond.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bond !== undefined)
                writer.writeMessage(1, this.bond, () => this.bond.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondByIdResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondByIdResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.bond, () => message.bond = dependency_2.vulcanize.bond.v1beta1.Bond.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondByIdResponse {
            return QueryGetBondByIdResponse.deserialize(bytes);
        }
    }
    export class QueryGetBondsByOwnerRequest extends pb_1.Message {
        constructor(data?: any[] | {
            owner?: string;
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get owner() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_4.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            owner?: string;
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }) {
            const message = new QueryGetBondsByOwnerRequest({});
            if (data.owner != null) {
                message.owner = data.owner;
            }
            if (data.pagination != null) {
                message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                owner?: string;
                pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.owner != null) {
                data.owner = this.owner;
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.owner === "string" && this.owner.length)
                writer.writeString(1, this.owner);
            if (this.pagination !== undefined)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsByOwnerRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsByOwnerRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.owner = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsByOwnerRequest {
            return QueryGetBondsByOwnerRequest.deserialize(bytes);
        }
    }
    export class QueryGetBondsByOwnerResponse extends pb_1.Message {
        constructor(data?: any[] | {
            bonds?: dependency_2.vulcanize.bond.v1beta1.Bond[];
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("bonds" in data && data.bonds != undefined) {
                    this.bonds = data.bonds;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get bonds() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.bond.v1beta1.Bond, 1) as dependency_2.vulcanize.bond.v1beta1.Bond[];
        }
        set bonds(value: dependency_2.vulcanize.bond.v1beta1.Bond[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_4.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            bonds?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }) {
            const message = new QueryGetBondsByOwnerResponse({});
            if (data.bonds != null) {
                message.bonds = data.bonds.map(item => dependency_2.vulcanize.bond.v1beta1.Bond.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                bonds?: ReturnType<typeof dependency_2.vulcanize.bond.v1beta1.Bond.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.bonds != null) {
                data.bonds = this.bonds.map((item: dependency_2.vulcanize.bond.v1beta1.Bond) => item.toObject());
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.bonds !== undefined)
                writer.writeRepeatedMessage(1, this.bonds, (item: dependency_2.vulcanize.bond.v1beta1.Bond) => item.serialize(writer));
            if (this.pagination !== undefined)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondsByOwnerResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondsByOwnerResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.bonds, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.vulcanize.bond.v1beta1.Bond.deserialize(reader), dependency_2.vulcanize.bond.v1beta1.Bond));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_4.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondsByOwnerResponse {
            return QueryGetBondsByOwnerResponse.deserialize(bytes);
        }
    }
    export class QueryGetBondModuleBalanceRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryGetBondModuleBalanceRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondModuleBalanceRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondModuleBalanceRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondModuleBalanceRequest {
            return QueryGetBondModuleBalanceRequest.deserialize(bytes);
        }
    }
    export class QueryGetBondModuleBalanceResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balance?: dependency_5.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("balance" in data && data.balance != undefined) {
                    this.balance = data.balance;
                }
            }
        }
        get balance() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.cosmos.base.v1beta1.Coin, 2) as dependency_5.cosmos.base.v1beta1.Coin[];
        }
        set balance(value: dependency_5.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            balance?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new QueryGetBondModuleBalanceResponse({});
            if (data.balance != null) {
                message.balance = data.balance.map(item => dependency_5.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                balance?: ReturnType<typeof dependency_5.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.balance != null) {
                data.balance = this.balance.map((item: dependency_5.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.balance !== undefined)
                writer.writeRepeatedMessage(2, this.balance, (item: dependency_5.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetBondModuleBalanceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryGetBondModuleBalanceResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 2:
                        reader.readMessage(message.balance, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_5.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryGetBondModuleBalanceResponse {
            return QueryGetBondModuleBalanceResponse.deserialize(bytes);
        }
    }
}