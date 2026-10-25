export default async function getRules(){
    await window.electronAPI.showRules();
};