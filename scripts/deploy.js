async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
  const PriceConsumer = await ethers.getContractFactory("PriceConsumerV3");
  const priceConsumer = await PriceConsumer.deploy();
  await priceConsumer.deployed();
  const priceConsumerAddress = priceConsumer.address;

  const Token = await ethers.getContractFactory("StableCoinToken");
  const token = await Token.deploy();
  await Token.deployed();
  const TokenAddress = Token.address;

  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy(priceConsumerAddress, TokenAddress);
  await vault.deployed();
  const vaultAddress = vault.address;

  await Token.transferOwnership(vaultAddress);
  await Token.owner();

  console.log(`DINRToken address: ${dinrTokenAddress}`);
  console.log(`Vault address: ${vaultAddress}`);
  console.log(`Owner of DINRToken: ${await dinrToken.owner()}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});