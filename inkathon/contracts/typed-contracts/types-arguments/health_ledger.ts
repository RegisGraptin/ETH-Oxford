import type BN from 'bn.js';

export type HealthRecord = {
	date: (number | string | BN),
	title: string,
	doctor: string,
	hospital: string,
	recordType: string
}

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

