// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.1
 * source: vulcanize/registry/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./registry";
import * as pb_1 from "google-protobuf";
export namespace vulcanize.registry.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: dependency_2.vulcanize.registry.v1beta1.Params;
            records?: dependency_2.vulcanize.registry.v1beta1.Record[];
            authorities?: dependency_2.vulcanize.registry.v1beta1.AuthorityEntry[];
            names?: dependency_2.vulcanize.registry.v1beta1.NameEntry[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("records" in data && data.records != undefined) {
                    this.records = data.records;
                }
                if ("authorities" in data && data.authorities != undefined) {
                    this.authorities = data.authorities;
                }
                if ("names" in data && data.names != undefined) {
                    this.names = data.names;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.vulcanize.registry.v1beta1.Params, 1) as dependency_2.vulcanize.registry.v1beta1.Params;
        }
        set params(value: dependency_2.vulcanize.registry.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get records() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.registry.v1beta1.Record, 2) as dependency_2.vulcanize.registry.v1beta1.Record[];
        }
        set records(value: dependency_2.vulcanize.registry.v1beta1.Record[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get authorities() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.registry.v1beta1.AuthorityEntry, 3) as dependency_2.vulcanize.registry.v1beta1.AuthorityEntry[];
        }
        set authorities(value: dependency_2.vulcanize.registry.v1beta1.AuthorityEntry[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get names() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.vulcanize.registry.v1beta1.NameEntry, 4) as dependency_2.vulcanize.registry.v1beta1.NameEntry[];
        }
        set names(value: dependency_2.vulcanize.registry.v1beta1.NameEntry[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.Params.prototype.toObject>;
            records?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.Record.prototype.toObject>[];
            authorities?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.AuthorityEntry.prototype.toObject>[];
            names?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.NameEntry.prototype.toObject>[];
        }): GenesisState {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = dependency_2.vulcanize.registry.v1beta1.Params.fromObject(data.params);
            }
            if (data.records != null) {
                message.records = data.records.map(item => dependency_2.vulcanize.registry.v1beta1.Record.fromObject(item));
            }
            if (data.authorities != null) {
                message.authorities = data.authorities.map(item => dependency_2.vulcanize.registry.v1beta1.AuthorityEntry.fromObject(item));
            }
            if (data.names != null) {
                message.names = data.names.map(item => dependency_2.vulcanize.registry.v1beta1.NameEntry.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.Params.prototype.toObject>;
                records?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.Record.prototype.toObject>[];
                authorities?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.AuthorityEntry.prototype.toObject>[];
                names?: ReturnType<typeof dependency_2.vulcanize.registry.v1beta1.NameEntry.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.records != null) {
                data.records = this.records.map((item: dependency_2.vulcanize.registry.v1beta1.Record) => item.toObject());
            }
            if (this.authorities != null) {
                data.authorities = this.authorities.map((item: dependency_2.vulcanize.registry.v1beta1.AuthorityEntry) => item.toObject());
            }
            if (this.names != null) {
                data.names = this.names.map((item: dependency_2.vulcanize.registry.v1beta1.NameEntry) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.records.length)
                writer.writeRepeatedMessage(2, this.records, (item: dependency_2.vulcanize.registry.v1beta1.Record) => item.serialize(writer));
            if (this.authorities.length)
                writer.writeRepeatedMessage(3, this.authorities, (item: dependency_2.vulcanize.registry.v1beta1.AuthorityEntry) => item.serialize(writer));
            if (this.names.length)
                writer.writeRepeatedMessage(4, this.names, (item: dependency_2.vulcanize.registry.v1beta1.NameEntry) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_2.vulcanize.registry.v1beta1.Params.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.records, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.vulcanize.registry.v1beta1.Record.deserialize(reader), dependency_2.vulcanize.registry.v1beta1.Record));
                        break;
                    case 3:
                        reader.readMessage(message.authorities, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.vulcanize.registry.v1beta1.AuthorityEntry.deserialize(reader), dependency_2.vulcanize.registry.v1beta1.AuthorityEntry));
                        break;
                    case 4:
                        reader.readMessage(message.names, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.vulcanize.registry.v1beta1.NameEntry.deserialize(reader), dependency_2.vulcanize.registry.v1beta1.NameEntry));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
}
