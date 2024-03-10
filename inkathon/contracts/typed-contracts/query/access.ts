/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/access';
import type * as ReturnTypes from '../types-returns/access';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/access.json';


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
	* addDoctor
	*
	* @param { ArgumentTypes.AccountId } doctor,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"addDoctor" (
		doctor: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "addDoctor", [doctor], __options , (result) => { return handleReturnType(result, getTypeDescription(5, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* authorize
	*
	* @param { ArgumentTypes.AccountId } doctor,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"authorize" (
		doctor: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "authorize", [doctor], __options , (result) => { return handleReturnType(result, getTypeDescription(5, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* revoke
	*
	* @param { ArgumentTypes.AccountId } doctor,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"revoke" (
		doctor: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "revoke", [doctor], __options , (result) => { return handleReturnType(result, getTypeDescription(5, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getDoctor
	*
	* @returns { Result<Array<ReturnTypes.AccountId>, ReturnTypes.LangError> }
	*/
	"getDoctor" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<ReturnTypes.AccountId>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getDoctor", [], __options , (result) => { return handleReturnType(result, getTypeDescription(8, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getAuthorization
	*
	* @param { ArgumentTypes.AccountId } doctor,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"getAuthorization" (
		doctor: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getAuthorization", [doctor], __options , (result) => { return handleReturnType(result, getTypeDescription(9, DATA_TYPE_DESCRIPTIONS)); });
	}

}