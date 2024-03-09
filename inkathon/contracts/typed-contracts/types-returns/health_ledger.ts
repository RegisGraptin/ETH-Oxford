import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export type HealthRecord = {
	date: number,
	title: string,
	doctor: string,
	hospital: string,
	recordType: string
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

