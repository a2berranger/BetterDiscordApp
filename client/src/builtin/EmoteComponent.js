/**
 * BetterDiscord Emote Component
 * Copyright (c) 2015-present Jiiks/JsSucks - https://github.com/Jiiks / https://github.com/JsSucks
 * All rights reserved.
 * https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

import VrWrapper from '../ui/vrwrapper';
import EmoteComponent from './EmoteComponent.vue';

const EMOTE_SOURCES = [
    'https://static-cdn.jtvnw.net/emoticons/v1/:id/1.0',
    'https://cdn.frankerfacez.com/emoticon/:id/1',
    'https://cdn.betterttv.net/emote/:id/1x'
]

export default class Emote extends VrWrapper {

    constructor(type, id, name) {
        super();
        this.jumboable = false;
        this.type = type;
        this.id = id;
        this.name = name;
    }

    get component() { return EmoteComponent }

    get props() {
        return {
            src: this.parseSrc(),
            name: this.name,
            jumboable: this.jumboable
        }
    }

    parseSrc() {
        const { type, id } = this;
        if (type > 2 || type < 0) return '';
        return EMOTE_SOURCES[type].replace(':id', id);
    }

}
