import React from 'react';
import {Text} from 'ink';
import zod from 'zod';
import {argument} from '../../../../../source/index.js';

export const args = zod
	.array(zod.string())
	.describe(argument({name: 'traits', description: 'Traits'}));

type Properties = {
	readonly args: zod.infer<typeof args>;
};

export default function Index({args}: Properties) {
	return <Text>Arguments = {args.join(', ')}</Text>;
}
