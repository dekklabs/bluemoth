import { randomAddress } from "./address";
import { randomDate } from "./dates";
import { randomDouble } from "./double";
import { randomUUID } from "./id";
import { randomInteger } from "./integer";
import { randomName } from "./names";
import { statusValue } from "./status";

const bluemoth = {
  names: randomName,
  address: randomAddress,
  decimals: randomDouble,
  integers: randomInteger,
  id: randomUUID,
  status: statusValue,
  dates: {
    short: randomDate,
  }
}

export default bluemoth;
