import { getRandomItem } from "./utils/getRandom";

export enum statusValue {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  TIMEOUT = "TIMEOUT",
  UNKNOWN = "UNKNOWN",
  ERROR = "ERROR",
  WARNING = "WARNING",
  INFO = "INFO",
  DEBUG = "DEBUG",
  NOTSET = "NOTSET",
  CRITICAL = "CRITICAL",
  FATAL = "FATAL",
  SUCCESSFUL = "SUCCESSFUL",
  FAIL = "FAIL",
  PASS = "PASS",
  SKIP = "SKIP",
  SKIPPED = "SKIPPED",
  IGNORE = "IGNORE",
}
