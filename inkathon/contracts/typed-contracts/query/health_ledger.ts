/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/health_ledger';
import type * as ReturnTypes from '../types-returns/health_ledger';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/health_ledger.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;
	readonly __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		nativeApi : ApiPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* add
	*
	* @param { string } title,
	* @param { string } doctor,
	* @param { string } hospital,
	* @param { string } recordType,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"add" (
		title: string,
		doctor: string,
		hospital: string,
		recordType: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "add", [title, doctor, hospital, recordType], __options , (result) => { return handleReturnType(result, getTypeDescription(4, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* get
	*
	* @returns { Result<Array<ReturnTypes.HealthRecord>, ReturnTypes.LangError> }
	*/
	"get" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<ReturnTypes.HealthRecord>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "get", [], __options , (result) => { return handleReturnType(result, getTypeDescription(7, DATA_TYPE_DESCRIPTIONS)); });
	}

}