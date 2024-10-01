/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum } from "./common";

export enum AccessErrorInput { CannotReinitialized = 'CannotReinitialized', NotOwner = 'NotOwner' };
export enum AccessErrorOutput { CannotReinitialized = 'CannotReinitialized', NotOwner = 'NotOwner' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum RoyaltyManagerErrorsInput { OnlyOwner = 'OnlyOwner', Initialized = 'Initialized', CallerMustBeOwnerOrAdmin = 'CallerMustBeOwnerOrAdmin', FeeHigherThanLimit = 'FeeHigherThanLimit', FeeLimitTooHigh = 'FeeLimitTooHigh', ZeroAddress = 'ZeroAddress' };
export enum RoyaltyManagerErrorsOutput { OnlyOwner = 'OnlyOwner', Initialized = 'Initialized', CallerMustBeOwnerOrAdmin = 'CallerMustBeOwnerOrAdmin', FeeHigherThanLimit = 'FeeHigherThanLimit', FeeLimitTooHigh = 'FeeLimitTooHigh', ZeroAddress = 'ZeroAddress' };

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type OwnershipRenouncedInput = { previous_owner: IdentityInput };
export type OwnershipRenouncedOutput = { previous_owner: IdentityOutput };
export type OwnershipSetInput = { new_owner: IdentityInput };
export type OwnershipSetOutput = { new_owner: IdentityOutput };
export type OwnershipTransferredInput = { new_owner: IdentityInput, previous_owner: IdentityInput };
export type OwnershipTransferredOutput = { new_owner: IdentityOutput, previous_owner: IdentityOutput };
export type RoyaltyInfoInput = { collection: ContractIdInput, receiver: IdentityInput, fee: BigNumberish };
export type RoyaltyInfoOutput = { collection: ContractIdOutput, receiver: IdentityOutput, fee: BN };
export type RoyaltyRegistryEventInput = { royalty_info: RoyaltyInfoInput };
export type RoyaltyRegistryEventOutput = { royalty_info: RoyaltyInfoOutput };

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "enum errors::RoyaltyManagerErrors",
      "concreteTypeId": "96d66c401589582a4e0611b3bff6ad49259030ac8d6d141c9c36745c1ce41d1e",
      "metadataTypeId": 1
    },
    {
      "type": "enum libraries::ownable::AccessError",
      "concreteTypeId": "b125b3c353d0e20ba2296785cc1653908f3c1fb7e67e055938c31fd0e1bb8086",
      "metadataTypeId": 2
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 3
    },
    {
      "type": "enum std::option::Option<enum std::identity::Identity>",
      "concreteTypeId": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "metadataTypeId": 4,
      "typeArguments": [
        "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
      ]
    },
    {
      "type": "enum std::option::Option<struct interfaces::royalty_manager_interface::RoyaltyInfo>",
      "concreteTypeId": "78f296480b1a39b91fffe89acbe042651ba3d74016fecadd0285b024ef8e896e",
      "metadataTypeId": 4,
      "typeArguments": [
        "89c876953f15cbfcc40dfacf6edf364bf67f7b06b48757014de53ddbe62a10aa"
      ]
    },
    {
      "type": "struct interfaces::royalty_manager_interface::RoyaltyInfo",
      "concreteTypeId": "89c876953f15cbfcc40dfacf6edf364bf67f7b06b48757014de53ddbe62a10aa",
      "metadataTypeId": 6
    },
    {
      "type": "struct interfaces::royalty_manager_interface::RoyaltyRegistryEvent",
      "concreteTypeId": "68ed4e12654c0313180bf436b02e414f85b52de7c5f09a2cbc5ffe383adb7c1f",
      "metadataTypeId": 7
    },
    {
      "type": "struct libraries::ownable::OwnershipRenounced",
      "concreteTypeId": "6dd047dcef1fafba87b54170a1ee4a99a8ae37746e594cbc548c5315368b20c3",
      "metadataTypeId": 8
    },
    {
      "type": "struct libraries::ownable::OwnershipSet",
      "concreteTypeId": "8416605cb05f0e41791636365d6644426eb8723c9bbdfc940b41652fc5bb7e61",
      "metadataTypeId": 9
    },
    {
      "type": "struct libraries::ownable::OwnershipTransferred",
      "concreteTypeId": "947c52bd18fcf648398d82d4d7b3cb539ef96fec3211f41a6e733a8a4f02f67e",
      "metadataTypeId": 10
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 12
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "b256",
      "metadataTypeId": 0
    },
    {
      "type": "enum errors::RoyaltyManagerErrors",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "OnlyOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Initialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "CallerMustBeOwnerOrAdmin",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "FeeHigherThanLimit",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "FeeLimitTooHigh",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "ZeroAddress",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum libraries::ownable::AccessError",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "CannotReinitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NotOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "Address",
          "typeId": 11
        },
        {
          "name": "ContractId",
          "typeId": 12
        }
      ]
    },
    {
      "type": "enum std::option::Option",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "None",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Some",
          "typeId": 5
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "type": "generic T",
      "metadataTypeId": 5
    },
    {
      "type": "struct interfaces::royalty_manager_interface::RoyaltyInfo",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "collection",
          "typeId": 12
        },
        {
          "name": "receiver",
          "typeId": 3
        },
        {
          "name": "fee",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct interfaces::royalty_manager_interface::RoyaltyRegistryEvent",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "royalty_info",
          "typeId": 6
        }
      ]
    },
    {
      "type": "struct libraries::ownable::OwnershipRenounced",
      "metadataTypeId": 8,
      "components": [
        {
          "name": "previous_owner",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct libraries::ownable::OwnershipSet",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "new_owner",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct libraries::ownable::OwnershipTransferred",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "new_owner",
          "typeId": 3
        },
        {
          "name": "previous_owner",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 12,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [],
      "name": "get_royalty_fee_limit",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "collection",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        }
      ],
      "name": "get_royalty_info",
      "output": "78f296480b1a39b91fffe89acbe042651ba3d74016fecadd0285b024ef8e896e",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Returns the royalty info of the NFT collection"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "initialize",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Initializes the contract and sets the owner"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "owner",
      "output": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "collection",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "receiver",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "fee",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "register_royalty_info",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Stores royalty info by admin or owner of the NFT collection contract"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "renounce_ownership",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "new_fee_limit",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "set_royalty_fee_limit",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Sets the max limit of the royalty that can be set for collections"
          ]
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "new_owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "transfer_ownership",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "10868993773200300074",
      "concreteTypeId": "96d66c401589582a4e0611b3bff6ad49259030ac8d6d141c9c36745c1ce41d1e"
    },
    {
      "logId": "12764806370357731851",
      "concreteTypeId": "b125b3c353d0e20ba2296785cc1653908f3c1fb7e67e055938c31fd0e1bb8086"
    },
    {
      "logId": "9517900813706399297",
      "concreteTypeId": "8416605cb05f0e41791636365d6644426eb8723c9bbdfc940b41652fc5bb7e61"
    },
    {
      "logId": "7560785190340789011",
      "concreteTypeId": "68ed4e12654c0313180bf436b02e414f85b52de7c5f09a2cbc5ffe383adb7c1f"
    },
    {
      "logId": "7912903559520169914",
      "concreteTypeId": "6dd047dcef1fafba87b54170a1ee4a99a8ae37746e594cbc548c5315368b20c3"
    },
    {
      "logId": "10699517786846983752",
      "concreteTypeId": "947c52bd18fcf648398d82d4d7b3cb539ef96fec3211f41a6e733a8a4f02f67e"
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5d",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5e",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "38a1b038206f348ec947ba5770c6d713148c9d8bb0b312f47acc88777da1c09d",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "aad0061e1c19063431c962f04488c0348ba11dcab488efb1acf6cc0064dcf869",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class RoyaltyManagerInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    get_royalty_fee_limit: FunctionFragment;
    get_royalty_info: FunctionFragment;
    initialize: FunctionFragment;
    owner: FunctionFragment;
    register_royalty_info: FunctionFragment;
    renounce_ownership: FunctionFragment;
    set_royalty_fee_limit: FunctionFragment;
    transfer_ownership: FunctionFragment;
  };
}

export class RoyaltyManager extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: RoyaltyManagerInterface;
  declare functions: {
    get_royalty_fee_limit: InvokeFunction<[], BN>;
    get_royalty_info: InvokeFunction<[collection: ContractIdInput], Option<RoyaltyInfoOutput>>;
    initialize: InvokeFunction<[], void>;
    owner: InvokeFunction<[], Option<IdentityOutput>>;
    register_royalty_info: InvokeFunction<[collection: ContractIdInput, receiver: IdentityInput, fee: BigNumberish], void>;
    renounce_ownership: InvokeFunction<[], void>;
    set_royalty_fee_limit: InvokeFunction<[new_fee_limit: BigNumberish], void>;
    transfer_ownership: InvokeFunction<[new_owner: IdentityInput], void>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
