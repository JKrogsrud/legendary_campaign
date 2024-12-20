"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardSubTypes = exports.cardTypes = void 0;
const HERO = {
    id: 1,
    value: "heroes",
    label: "Hero",
};
const MASTERMIND = {
    id: 2,
    value: "masterminds",
    label: "Mastermind",
};
const HENCHMEN = {
    id: 3,
    value: "henchmen",
    label: "Henchmen Villain",
};
const VILLAIN = {
    id: 4,
    value: "villains",
    label: "Villain",
};
const SCHEME = {
    id: 5,
    value: "schemes",
    label: "Scheme",
};
const BYSTANDER = {
    id: 6,
    value: "bystanders",
    label: "Bystander",
};
/**
 * Object with the metadata of card types.
 */
exports.cardTypes = Object.freeze({
    HERO, // 1
    MASTERMIND, // 2
    HENCHMEN, // 3
    VILLAIN, // 4
    SCHEME, // 5
    BYSTANDER, // 6
});
const TRAP = {
    id: 1,
    label: "Trap"
};
const LOCATION = {
    id: 2,
    label: "Location"
};
const VILLAINOUS_WEAPON = {
    id: 3,
    label: "Villainous Weapon"
};
/**
 * Object with the metadata of card sub-types.
 */
exports.cardSubTypes = Object.freeze({
    TRAP, // 1
    LOCATION, // 2
    VILLAINOUS_WEAPON, // 3
});
