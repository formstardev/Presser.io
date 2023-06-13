import React from "react";
import Account from "./accountCollapse";
import TermsOfService from "./termsOfServiceCollapse";
import About from "./aboutCollapse";
import Help from "./helpCollapse";
import PrivacyAndSafety from "./privacyAndSafetyColllapse";
import Notification from "./notificationCollapse";
import ContentPreferences from "./contentPreferencesCollapse";
import Favourites from "./favouritesCollapse";

const SettingComponent = () => {
    return (
        <>
            <div className="w-full bg-[#373C40] rounded-md min-h-fit py-2">
                <div className="w-full border-b border-white border-opacity-10">
                    <p className="font-bold text-white text-[34px] mx-3 py-3">
                        Settings and Privacy
                    </p>
                </div>
                <div className="w-full border-b border-white border-opacity-10">
                    <Account/>
                </div>
                <div className="w-full border-b border-white border-opacity-10">
                    <PrivacyAndSafety/>
                </div>
                <div className="w-full border-b border-white border-opacity-10">
                    <Notification/>
                </div>
                <div className="w-full border-b border-white border-opacity-10">
                    <ContentPreferences/>
                </div>
                <div className="w-full border-b border-white border-opacity-10">
                    <About/>
                </div>
                <div className="w-full border-b border-white border-opacity-10">
                    <Favourites/>
                </div>
                <div className="w-full border-b border-white border-opacity-10">
                    <TermsOfService/>
                </div>
                <div className="w-full">
                    <Help/>
                </div>
            </div>
        </>
    )
}
export default SettingComponent;