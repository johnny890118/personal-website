const Work = () => {
  return (
    <div className="h-[40rem] bg-[url('/bg1.jpg')] bg-cover bg-center md:h-dvh">
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-sm">
        <p className="mb-5 text-center">工作經歷</p>
        <div className="w-1/2 rounded-3xl bg-white p-12 shadow-2xl">
          <p>
            前端工程師 & 軟體工程師 榮興自動化科技股份有限公司
            軟體工程師台南市歸仁區 2023/5~仍在職 1.派車系統前端 React：
            使用React建構整個前端應用程式。 Axios：
            利用Axios串接API，處理前後端的資料交換。 Tailwind CSS： 運用Tailwind
            CSS打造精美且高度可定制的使用者介面，提升使用者體驗。
            實現將車輛資訊、位置、倉儲資訊以及任務狀況即時更新顯示在前端畫面上。
            使用者能夠派發任務給車輛。 2. 派車系統資料庫 MSSQL：
            數據庫設計：負責設計並實現了派車系統的數據庫架構，包括車輛資訊、倉儲資訊和任務記錄等。
            日誌記錄：使用MSSQL紀錄應用操作的log，以便於追蹤問題和優化系統性能。
            3.派車系統的網路通訊：
            使用Python，應用socket技術進行派車系統的網路通訊開發。
            實現多執行緒技術，以處理複雜的多車同時運作情境，確保系統高效穩定。
            4.AGV燈效控制： 利用 Arduino 平台，設計並實現了多種 AGV
            模式下的燈光效果，提升 AGV 在不同狀態下的可視性。 5.AGV音效開發：
            使用Python，編寫程式實現AGV在各模式下的音效反饋。 6.AGV超聲波避障：
            使用Python，開發超聲波避障系統，確保AGV能夠靈活且安全地避免障礙物。
            7.HMI後端開發：
            使用C++，開發人機介面（HMI）的後端系統，以支援AGV系統的操作和監控。包括與前端界面的數據交換、事件處理和系統狀態更新。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
