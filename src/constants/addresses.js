import abi from "../constants/Vault.json";
import stableCoinAbi from "../constants/StableCoinToken.json";

const VAULT_CCONTRACT_ADDRESS = "0x2Ae221CE6FC9D5b5Eb6d526F14658Ac640eF7f1b";
const STABLE_COIN_ADDRESS = "0x56b7e59990480a176174B882DA839bFaA14C4ac4";
const ORACLE_ADDRESS = "0x33c8546DEDF479A1F7Bcb58A1006BFdf5ed1AFF6";
const VAULT_ABI = abi.abi;
const STABLE_COIN_ABI = stableCoinAbi.abi;

export {
  VAULT_CCONTRACT_ADDRESS,
  VAULT_ABI,
  STABLE_COIN_ABI,
  STABLE_COIN_ADDRESS,
};
