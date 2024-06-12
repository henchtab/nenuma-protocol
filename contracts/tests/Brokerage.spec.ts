import { Blockchain, SandboxContract, TreasuryContract } from "@ton/sandbox";
import { toNano } from "@ton/core";
import { Brokerage } from "../wrappers/Brokerage";
import "@ton/test-utils";

describe("Brokerage", () => {
  let blockchain: Blockchain;
  let owner: SandboxContract<TreasuryContract>;
  let brokerage: SandboxContract<Brokerage>;

  beforeEach(async () => {
    blockchain = await Blockchain.create();

    owner = await blockchain.treasury("owner");

    brokerage = blockchain.openContract(
      await Brokerage.fromInit(owner.address),
    );

    const BRGDeploy = await brokerage.send(
      owner.getSender(),
      {
        value: toNano("70.00"),
      },
      {
        $$type: "BRGDeploy",
        queryId: 0n,
      },
    );

    expect(BRGDeploy.transactions).toHaveTransaction({
      from: owner.address,
      to: brokerage.address,
      deploy: true,
      success: true,
    });
  });

  it("(1) Should deploy a brokerage", async () => {
    // the check is done inside beforeEach
    // blockchain and brokerage are ready to use
  });
});