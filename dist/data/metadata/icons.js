"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconsArray = exports.icons = void 0;
const ATTACK = {
    id: 1,
    value: "attack",
    label: "Attack"
};
const RECRUIT = {
    id: 2,
    value: "recruit",
    label: "Recruit"
};
const COST = {
    id: 3,
    value: "cost",
    label: "Cost"
};
const VP = {
    id: 4,
    value: "vp",
    label: "Victory Points"
};
const FOCUS = {
    id: 5,
    value: "focus",
    label: "Focus"
};
const PIERCING = {
    id: 6,
    value: "piercing",
    label: "Piercing Energy"
};
const TOKEN = {
    id: 7,
    value: "token",
    label: "Token Card"
};
/**
 * Object with the metadata of icons.
 */
exports.icons = Object.freeze({
    ATTACK, // 1
    RECRUIT, // 2
    COST, // 3
    VP, // 4
    FOCUS, // 5
    PIERCING, // 6
    TOKEN // 7
});
/**
 * Array with the metadata of icons. The first item corresponds to id one and it represents the attack icon.
 */
exports.iconsArray = Object.freeze(Object.values(exports.icons));
