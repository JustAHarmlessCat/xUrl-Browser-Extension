export function currentTab() {
    console.log('currentTab function called');
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
        let tab = tabs[0];
        console.log(tab.url);
        const gettingCurrent = tab.url;
        console.log('Getting current tab:', gettingCurrent);
    }, console.error);
}