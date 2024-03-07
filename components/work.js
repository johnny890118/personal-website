const Work = () => {
  return (
    <div className="h-auto pt-28 text-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="mb-5 border-b-4 border-cyan-400 text-center text-2xl font-bold">
          工作經歷
        </p>
        <div className="w-[90%] rounded-3xl p-12 shadow-2xl backdrop-blur-3xl md:w-1/2">
          <p>榮興自動化科技股份有限公司</p>
          <p>台南市歸仁區 2023/5~仍在職</p>
          <br />
          <p>前端工程師 & 軟體工程師</p>
          <br />
          <ol className="list-decimal pl-5">
            <li>
              派車系統前端：
              <ul className="list-disc pl-4">
                <li>React：使用React建構整個前端應用程式。</li>
                <li>Axios：利用Axios串接API，處理前後端的資料交換。</li>
                <li>
                  Tailwind CSS：運用Tailwind
                  CSS打造精美且高度可定制的使用者介面，提升使用者體驗。
                </li>
              </ul>
              實現將車輛資訊、位置、倉儲資訊以及任務狀況即時更新顯示在前端畫面上。
              使用者能夠派發任務給車輛。
            </li>
            <br />
            <li>
              派車系統資料庫 MSSQL：
              <ul className="list-disc pl-4">
                <li>
                  數據庫設計：負責設計並實現了派車系統的數據庫架構，包括車輛資訊、倉儲資訊和任務記錄等。
                </li>
                <li>
                  日誌記錄：使用MSSQL紀錄應用操作的log，以便於追蹤問題和優化系統性能。
                </li>
              </ul>
            </li>
            <br />
            <li>
              派車系統的網路通訊：
              <ul className="list-disc pl-4">
                <li>
                  使用Python，應用socket技術進行派車系統的網路通訊開發。
                  實現多執行緒技術，以處理複雜的多車同時運作情境，確保系統高效穩定。
                </li>
              </ul>
            </li>
            <br />
            <li>
              AGV燈效控制：
              <ul className="list-disc pl-4">
                <li>
                  利用 Arduino 平台，設計並實現了多種 AGV 模式下的燈光效果，提升
                  AGV 在不同狀態下的可視性。
                </li>
              </ul>
            </li>
            <br />
            <li>
              AGV音效開發：
              <ul className="list-disc pl-4">
                <li>使用Python，編寫程式實現AGV在各模式下的音效反饋。</li>
              </ul>
            </li>
            <br />
            <li>
              AGV超聲波避障：
              <ul className="list-disc pl-4">
                <li>
                  使用Python，開發超聲波避障系統，確保AGV能夠靈活且安全地避免障礙物。
                </li>
              </ul>
            </li>
            <br />
            <li>
              HMI後端開發：
              <ul className="list-disc pl-4">
                <li>
                  使用C++，開發人機介面（HMI）的後端系統，以支援AGV系統的操作和監控。包括與前端界面的數據交換、事件處理和系統狀態更新。
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Work;
