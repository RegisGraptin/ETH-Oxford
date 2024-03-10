/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/access';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * addDoctor
	 *
	 * @param { ArgumentTypes.AccountId } doctor,
	*/
	"addDoctor" (
		doctor: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "addDoctor", [doctor], __options);
	}

	/**
	 * authorize
	 *
	 * @param { ArgumentTypes.AccountId } doctor,
	*/
	"authorize" (
		doctor: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "authorize", [doctor], __options);
	}

	/**
	 * revoke
	 *
	 * @param { ArgumentTypes.AccountId } doctor,
	*/
	"revoke" (
		doctor: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "revoke", [doctor], __options);
	}

	/**
	 * getDoctor
	 *
	*/
	"getDoctor" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getDoctor", [], __options);
	}

	/**
	 * getAuthorization
	 *
	 * @param { ArgumentTypes.AccountId } doctor,
	*/
	"getAuthorization" (
		doctor: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getAuthorization", [doctor], __options);
	}

}