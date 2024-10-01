/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { Pool } from "./Pool";

const bytecode = decompressBytecode("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");

export class PoolFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, Pool.abi, accountOrProvider);
  }

  deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: Pool.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<Pool>> {
    const factory = new PoolFactory(wallet);
    return factory.deploy(options);
  }
}