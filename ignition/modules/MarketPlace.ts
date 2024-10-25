import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const marketPlaceModule = buildModule("marketPlaceModule", (m) => {
  const proposalVoteFactory = m.contract("AlfulannyMarket");

  


  return { proposalVoteFactory };
});

export default marketPlaceModule;



