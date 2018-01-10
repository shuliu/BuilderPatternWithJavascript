
export interface Builder {

  /** 建立 CPU */
  addCPU(): void;

  /** 建立 Memory */
  addMemory(): void;

  /** 建立硬碟 */
  addHD(): void;

  /** 建立外殼 */
  addBox(): void;
}