
export interface Builder {

  /** 建立 CPU */
  addCPU();

  /** 建立 Memory */
  addMemory();

  /** 建立硬碟 */
  addHD();

  /** 建立外殼 */
  addBox();
}