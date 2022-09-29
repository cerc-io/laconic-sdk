"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vulcanize = void 0;
const dependency_2 = __importStar(require("./../../../google/protobuf/duration"));
const dependency_3 = __importStar(require("./../../../google/protobuf/timestamp"));
const dependency_4 = __importStar(require("./../../../cosmos/base/v1beta1/coin"));
const pb_1 = __importStar(require("google-protobuf"));
var vulcanize;
(function (vulcanize) {
    var auction;
    (function (auction) {
        var v1beta1;
        (function (v1beta1) {
            class Params extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("commits_duration" in data && data.commits_duration != undefined) {
                            this.commits_duration = data.commits_duration;
                        }
                        if ("reveals_duration" in data && data.reveals_duration != undefined) {
                            this.reveals_duration = data.reveals_duration;
                        }
                        if ("commit_fee" in data && data.commit_fee != undefined) {
                            this.commit_fee = data.commit_fee;
                        }
                        if ("reveal_fee" in data && data.reveal_fee != undefined) {
                            this.reveal_fee = data.reveal_fee;
                        }
                        if ("minimum_bid" in data && data.minimum_bid != undefined) {
                            this.minimum_bid = data.minimum_bid;
                        }
                    }
                }
                get commits_duration() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 1);
                }
                set commits_duration(value) {
                    pb_1.Message.setWrapperField(this, 1, value);
                }
                get reveals_duration() {
                    return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 2);
                }
                set reveals_duration(value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                }
                get commit_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 3);
                }
                set commit_fee(value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                }
                get reveal_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 4);
                }
                set reveal_fee(value) {
                    pb_1.Message.setWrapperField(this, 4, value);
                }
                get minimum_bid() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 5);
                }
                set minimum_bid(value) {
                    pb_1.Message.setWrapperField(this, 5, value);
                }
                static fromObject(data) {
                    const message = new Params({});
                    if (data.commits_duration != null) {
                        message.commits_duration = dependency_2.google.protobuf.Duration.fromObject(data.commits_duration);
                    }
                    if (data.reveals_duration != null) {
                        message.reveals_duration = dependency_2.google.protobuf.Duration.fromObject(data.reveals_duration);
                    }
                    if (data.commit_fee != null) {
                        message.commit_fee = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.commit_fee);
                    }
                    if (data.reveal_fee != null) {
                        message.reveal_fee = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.reveal_fee);
                    }
                    if (data.minimum_bid != null) {
                        message.minimum_bid = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.minimum_bid);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.commits_duration != null) {
                        data.commits_duration = this.commits_duration.toObject();
                    }
                    if (this.reveals_duration != null) {
                        data.reveals_duration = this.reveals_duration.toObject();
                    }
                    if (this.commit_fee != null) {
                        data.commit_fee = this.commit_fee.toObject();
                    }
                    if (this.reveal_fee != null) {
                        data.reveal_fee = this.reveal_fee.toObject();
                    }
                    if (this.minimum_bid != null) {
                        data.minimum_bid = this.minimum_bid.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.commits_duration !== undefined)
                        writer.writeMessage(1, this.commits_duration, () => this.commits_duration.serialize(writer));
                    if (this.reveals_duration !== undefined)
                        writer.writeMessage(2, this.reveals_duration, () => this.reveals_duration.serialize(writer));
                    if (this.commit_fee !== undefined)
                        writer.writeMessage(3, this.commit_fee, () => this.commit_fee.serialize(writer));
                    if (this.reveal_fee !== undefined)
                        writer.writeMessage(4, this.reveal_fee, () => this.reveal_fee.serialize(writer));
                    if (this.minimum_bid !== undefined)
                        writer.writeMessage(5, this.minimum_bid, () => this.minimum_bid.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.commits_duration, () => message.commits_duration = dependency_2.google.protobuf.Duration.deserialize(reader));
                                break;
                            case 2:
                                reader.readMessage(message.reveals_duration, () => message.reveals_duration = dependency_2.google.protobuf.Duration.deserialize(reader));
                                break;
                            case 3:
                                reader.readMessage(message.commit_fee, () => message.commit_fee = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 4:
                                reader.readMessage(message.reveal_fee, () => message.reveal_fee = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 5:
                                reader.readMessage(message.minimum_bid, () => message.minimum_bid = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return Params.deserialize(bytes);
                }
            }
            v1beta1.Params = Params;
            class Auction extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("id" in data && data.id != undefined) {
                            this.id = data.id;
                        }
                        if ("status" in data && data.status != undefined) {
                            this.status = data.status;
                        }
                        if ("owner_address" in data && data.owner_address != undefined) {
                            this.owner_address = data.owner_address;
                        }
                        if ("create_time" in data && data.create_time != undefined) {
                            this.create_time = data.create_time;
                        }
                        if ("commits_end_time" in data && data.commits_end_time != undefined) {
                            this.commits_end_time = data.commits_end_time;
                        }
                        if ("reveals_end_time" in data && data.reveals_end_time != undefined) {
                            this.reveals_end_time = data.reveals_end_time;
                        }
                        if ("commit_fee" in data && data.commit_fee != undefined) {
                            this.commit_fee = data.commit_fee;
                        }
                        if ("reveal_fee" in data && data.reveal_fee != undefined) {
                            this.reveal_fee = data.reveal_fee;
                        }
                        if ("minimum_bid" in data && data.minimum_bid != undefined) {
                            this.minimum_bid = data.minimum_bid;
                        }
                        if ("winner_address" in data && data.winner_address != undefined) {
                            this.winner_address = data.winner_address;
                        }
                        if ("winning_bid" in data && data.winning_bid != undefined) {
                            this.winning_bid = data.winning_bid;
                        }
                        if ("winning_price" in data && data.winning_price != undefined) {
                            this.winning_price = data.winning_price;
                        }
                    }
                }
                get id() {
                    return pb_1.Message.getField(this, 1);
                }
                set id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get status() {
                    return pb_1.Message.getField(this, 2);
                }
                set status(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get owner_address() {
                    return pb_1.Message.getField(this, 3);
                }
                set owner_address(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get create_time() {
                    return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 4);
                }
                set create_time(value) {
                    pb_1.Message.setWrapperField(this, 4, value);
                }
                get commits_end_time() {
                    return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 5);
                }
                set commits_end_time(value) {
                    pb_1.Message.setWrapperField(this, 5, value);
                }
                get reveals_end_time() {
                    return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 6);
                }
                set reveals_end_time(value) {
                    pb_1.Message.setWrapperField(this, 6, value);
                }
                get commit_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 7);
                }
                set commit_fee(value) {
                    pb_1.Message.setWrapperField(this, 7, value);
                }
                get reveal_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 8);
                }
                set reveal_fee(value) {
                    pb_1.Message.setWrapperField(this, 8, value);
                }
                get minimum_bid() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 9);
                }
                set minimum_bid(value) {
                    pb_1.Message.setWrapperField(this, 9, value);
                }
                get winner_address() {
                    return pb_1.Message.getField(this, 10);
                }
                set winner_address(value) {
                    pb_1.Message.setField(this, 10, value);
                }
                get winning_bid() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 11);
                }
                set winning_bid(value) {
                    pb_1.Message.setWrapperField(this, 11, value);
                }
                get winning_price() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 12);
                }
                set winning_price(value) {
                    pb_1.Message.setWrapperField(this, 12, value);
                }
                static fromObject(data) {
                    const message = new Auction({});
                    if (data.id != null) {
                        message.id = data.id;
                    }
                    if (data.status != null) {
                        message.status = data.status;
                    }
                    if (data.owner_address != null) {
                        message.owner_address = data.owner_address;
                    }
                    if (data.create_time != null) {
                        message.create_time = dependency_3.google.protobuf.Timestamp.fromObject(data.create_time);
                    }
                    if (data.commits_end_time != null) {
                        message.commits_end_time = dependency_3.google.protobuf.Timestamp.fromObject(data.commits_end_time);
                    }
                    if (data.reveals_end_time != null) {
                        message.reveals_end_time = dependency_3.google.protobuf.Timestamp.fromObject(data.reveals_end_time);
                    }
                    if (data.commit_fee != null) {
                        message.commit_fee = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.commit_fee);
                    }
                    if (data.reveal_fee != null) {
                        message.reveal_fee = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.reveal_fee);
                    }
                    if (data.minimum_bid != null) {
                        message.minimum_bid = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.minimum_bid);
                    }
                    if (data.winner_address != null) {
                        message.winner_address = data.winner_address;
                    }
                    if (data.winning_bid != null) {
                        message.winning_bid = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.winning_bid);
                    }
                    if (data.winning_price != null) {
                        message.winning_price = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.winning_price);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.id != null) {
                        data.id = this.id;
                    }
                    if (this.status != null) {
                        data.status = this.status;
                    }
                    if (this.owner_address != null) {
                        data.owner_address = this.owner_address;
                    }
                    if (this.create_time != null) {
                        data.create_time = this.create_time.toObject();
                    }
                    if (this.commits_end_time != null) {
                        data.commits_end_time = this.commits_end_time.toObject();
                    }
                    if (this.reveals_end_time != null) {
                        data.reveals_end_time = this.reveals_end_time.toObject();
                    }
                    if (this.commit_fee != null) {
                        data.commit_fee = this.commit_fee.toObject();
                    }
                    if (this.reveal_fee != null) {
                        data.reveal_fee = this.reveal_fee.toObject();
                    }
                    if (this.minimum_bid != null) {
                        data.minimum_bid = this.minimum_bid.toObject();
                    }
                    if (this.winner_address != null) {
                        data.winner_address = this.winner_address;
                    }
                    if (this.winning_bid != null) {
                        data.winning_bid = this.winning_bid.toObject();
                    }
                    if (this.winning_price != null) {
                        data.winning_price = this.winning_price.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.id === "string" && this.id.length)
                        writer.writeString(1, this.id);
                    if (typeof this.status === "string" && this.status.length)
                        writer.writeString(2, this.status);
                    if (typeof this.owner_address === "string" && this.owner_address.length)
                        writer.writeString(3, this.owner_address);
                    if (this.create_time !== undefined)
                        writer.writeMessage(4, this.create_time, () => this.create_time.serialize(writer));
                    if (this.commits_end_time !== undefined)
                        writer.writeMessage(5, this.commits_end_time, () => this.commits_end_time.serialize(writer));
                    if (this.reveals_end_time !== undefined)
                        writer.writeMessage(6, this.reveals_end_time, () => this.reveals_end_time.serialize(writer));
                    if (this.commit_fee !== undefined)
                        writer.writeMessage(7, this.commit_fee, () => this.commit_fee.serialize(writer));
                    if (this.reveal_fee !== undefined)
                        writer.writeMessage(8, this.reveal_fee, () => this.reveal_fee.serialize(writer));
                    if (this.minimum_bid !== undefined)
                        writer.writeMessage(9, this.minimum_bid, () => this.minimum_bid.serialize(writer));
                    if (typeof this.winner_address === "string" && this.winner_address.length)
                        writer.writeString(10, this.winner_address);
                    if (this.winning_bid !== undefined)
                        writer.writeMessage(11, this.winning_bid, () => this.winning_bid.serialize(writer));
                    if (this.winning_price !== undefined)
                        writer.writeMessage(12, this.winning_price, () => this.winning_price.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Auction();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.id = reader.readString();
                                break;
                            case 2:
                                message.status = reader.readString();
                                break;
                            case 3:
                                message.owner_address = reader.readString();
                                break;
                            case 4:
                                reader.readMessage(message.create_time, () => message.create_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                                break;
                            case 5:
                                reader.readMessage(message.commits_end_time, () => message.commits_end_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                                break;
                            case 6:
                                reader.readMessage(message.reveals_end_time, () => message.reveals_end_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                                break;
                            case 7:
                                reader.readMessage(message.commit_fee, () => message.commit_fee = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 8:
                                reader.readMessage(message.reveal_fee, () => message.reveal_fee = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 9:
                                reader.readMessage(message.minimum_bid, () => message.minimum_bid = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 10:
                                message.winner_address = reader.readString();
                                break;
                            case 11:
                                reader.readMessage(message.winning_bid, () => message.winning_bid = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 12:
                                reader.readMessage(message.winning_price, () => message.winning_price = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return Auction.deserialize(bytes);
                }
            }
            v1beta1.Auction = Auction;
            class Auctions extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auctions" in data && data.auctions != undefined) {
                            this.auctions = data.auctions;
                        }
                    }
                }
                get auctions() {
                    return pb_1.Message.getRepeatedWrapperField(this, Auction, 1);
                }
                set auctions(value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                }
                static fromObject(data) {
                    const message = new Auctions({});
                    if (data.auctions != null) {
                        message.auctions = data.auctions.map(item => Auction.fromObject(item));
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auctions != null) {
                        data.auctions = this.auctions.map((item) => item.toObject());
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (this.auctions !== undefined)
                        writer.writeRepeatedMessage(1, this.auctions, (item) => item.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Auctions();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                reader.readMessage(message.auctions, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Auction.deserialize(reader), Auction));
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return Auctions.deserialize(bytes);
                }
            }
            v1beta1.Auctions = Auctions;
            class Bid extends pb_1.Message {
                constructor(data) {
                    super();
                    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("auction_id" in data && data.auction_id != undefined) {
                            this.auction_id = data.auction_id;
                        }
                        if ("bidder_address" in data && data.bidder_address != undefined) {
                            this.bidder_address = data.bidder_address;
                        }
                        if ("status" in data && data.status != undefined) {
                            this.status = data.status;
                        }
                        if ("commit_hash" in data && data.commit_hash != undefined) {
                            this.commit_hash = data.commit_hash;
                        }
                        if ("commit_time" in data && data.commit_time != undefined) {
                            this.commit_time = data.commit_time;
                        }
                        if ("commit_fee" in data && data.commit_fee != undefined) {
                            this.commit_fee = data.commit_fee;
                        }
                        if ("reveal_time" in data && data.reveal_time != undefined) {
                            this.reveal_time = data.reveal_time;
                        }
                        if ("reveal_fee" in data && data.reveal_fee != undefined) {
                            this.reveal_fee = data.reveal_fee;
                        }
                        if ("bid_amount" in data && data.bid_amount != undefined) {
                            this.bid_amount = data.bid_amount;
                        }
                    }
                }
                get auction_id() {
                    return pb_1.Message.getField(this, 1);
                }
                set auction_id(value) {
                    pb_1.Message.setField(this, 1, value);
                }
                get bidder_address() {
                    return pb_1.Message.getField(this, 2);
                }
                set bidder_address(value) {
                    pb_1.Message.setField(this, 2, value);
                }
                get status() {
                    return pb_1.Message.getField(this, 3);
                }
                set status(value) {
                    pb_1.Message.setField(this, 3, value);
                }
                get commit_hash() {
                    return pb_1.Message.getField(this, 4);
                }
                set commit_hash(value) {
                    pb_1.Message.setField(this, 4, value);
                }
                get commit_time() {
                    return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 5);
                }
                set commit_time(value) {
                    pb_1.Message.setWrapperField(this, 5, value);
                }
                get commit_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 6);
                }
                set commit_fee(value) {
                    pb_1.Message.setWrapperField(this, 6, value);
                }
                get reveal_time() {
                    return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 7);
                }
                set reveal_time(value) {
                    pb_1.Message.setWrapperField(this, 7, value);
                }
                get reveal_fee() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 8);
                }
                set reveal_fee(value) {
                    pb_1.Message.setWrapperField(this, 8, value);
                }
                get bid_amount() {
                    return pb_1.Message.getWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 9);
                }
                set bid_amount(value) {
                    pb_1.Message.setWrapperField(this, 9, value);
                }
                static fromObject(data) {
                    const message = new Bid({});
                    if (data.auction_id != null) {
                        message.auction_id = data.auction_id;
                    }
                    if (data.bidder_address != null) {
                        message.bidder_address = data.bidder_address;
                    }
                    if (data.status != null) {
                        message.status = data.status;
                    }
                    if (data.commit_hash != null) {
                        message.commit_hash = data.commit_hash;
                    }
                    if (data.commit_time != null) {
                        message.commit_time = dependency_3.google.protobuf.Timestamp.fromObject(data.commit_time);
                    }
                    if (data.commit_fee != null) {
                        message.commit_fee = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.commit_fee);
                    }
                    if (data.reveal_time != null) {
                        message.reveal_time = dependency_3.google.protobuf.Timestamp.fromObject(data.reveal_time);
                    }
                    if (data.reveal_fee != null) {
                        message.reveal_fee = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.reveal_fee);
                    }
                    if (data.bid_amount != null) {
                        message.bid_amount = dependency_4.cosmos.base.v1beta1.Coin.fromObject(data.bid_amount);
                    }
                    return message;
                }
                toObject() {
                    const data = {};
                    if (this.auction_id != null) {
                        data.auction_id = this.auction_id;
                    }
                    if (this.bidder_address != null) {
                        data.bidder_address = this.bidder_address;
                    }
                    if (this.status != null) {
                        data.status = this.status;
                    }
                    if (this.commit_hash != null) {
                        data.commit_hash = this.commit_hash;
                    }
                    if (this.commit_time != null) {
                        data.commit_time = this.commit_time.toObject();
                    }
                    if (this.commit_fee != null) {
                        data.commit_fee = this.commit_fee.toObject();
                    }
                    if (this.reveal_time != null) {
                        data.reveal_time = this.reveal_time.toObject();
                    }
                    if (this.reveal_fee != null) {
                        data.reveal_fee = this.reveal_fee.toObject();
                    }
                    if (this.bid_amount != null) {
                        data.bid_amount = this.bid_amount.toObject();
                    }
                    return data;
                }
                serialize(w) {
                    const writer = w || new pb_1.BinaryWriter();
                    if (typeof this.auction_id === "string" && this.auction_id.length)
                        writer.writeString(1, this.auction_id);
                    if (typeof this.bidder_address === "string" && this.bidder_address.length)
                        writer.writeString(2, this.bidder_address);
                    if (typeof this.status === "string" && this.status.length)
                        writer.writeString(3, this.status);
                    if (typeof this.commit_hash === "string" && this.commit_hash.length)
                        writer.writeString(4, this.commit_hash);
                    if (this.commit_time !== undefined)
                        writer.writeMessage(5, this.commit_time, () => this.commit_time.serialize(writer));
                    if (this.commit_fee !== undefined)
                        writer.writeMessage(6, this.commit_fee, () => this.commit_fee.serialize(writer));
                    if (this.reveal_time !== undefined)
                        writer.writeMessage(7, this.reveal_time, () => this.reveal_time.serialize(writer));
                    if (this.reveal_fee !== undefined)
                        writer.writeMessage(8, this.reveal_fee, () => this.reveal_fee.serialize(writer));
                    if (this.bid_amount !== undefined)
                        writer.writeMessage(9, this.bid_amount, () => this.bid_amount.serialize(writer));
                    if (!w)
                        return writer.getResultBuffer();
                }
                static deserialize(bytes) {
                    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Bid();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.auction_id = reader.readString();
                                break;
                            case 2:
                                message.bidder_address = reader.readString();
                                break;
                            case 3:
                                message.status = reader.readString();
                                break;
                            case 4:
                                message.commit_hash = reader.readString();
                                break;
                            case 5:
                                reader.readMessage(message.commit_time, () => message.commit_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                                break;
                            case 6:
                                reader.readMessage(message.commit_fee, () => message.commit_fee = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 7:
                                reader.readMessage(message.reveal_time, () => message.reveal_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                                break;
                            case 8:
                                reader.readMessage(message.reveal_fee, () => message.reveal_fee = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            case 9:
                                reader.readMessage(message.bid_amount, () => message.bid_amount = dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader));
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                }
                serializeBinary() {
                    return this.serialize();
                }
                static deserializeBinary(bytes) {
                    return Bid.deserialize(bytes);
                }
            }
            v1beta1.Bid = Bid;
        })(v1beta1 = auction.v1beta1 || (auction.v1beta1 = {}));
    })(auction = vulcanize.auction || (vulcanize.auction = {}));
})(vulcanize = exports.vulcanize || (exports.vulcanize = {}));
