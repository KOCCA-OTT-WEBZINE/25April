import React from 'react';

const MainPage = () => {

  return (
    <div>

      {/* banner */}
      <div className="z-[-2] bg-[url('../assets/mainBanner-1.png')] relative bg-cover bg-center max-h-[700px] h-[700px] flex items-center w-full>">
        <div id="overlay" className="z-[-1] absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#00000060] to-[#00000020]"></div>

        <div className="z-[1] max-w-[1560px] w-full mx-auto text-white gap-[8px] flex flex-col">
          <div className="flex items-center gap-[12px] text-text-md">
            <div className="border border-white py-[4px] px-[16px] rounded-full">Special Issue</div>
            <p>플랫폼과 콘텐츠 IP의 공생 관계</p>
          </div>
          <div>
            <p className="text-title-lg font-semibold">원작이 있는, OTT 오리지널</p>
            <p className="text-title-sm font-semibold">: 중증외상센터</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;