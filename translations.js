(() => {
    console.log(`🟠 LOADING TRANSLATION CONTENT`);
    const translation ={
        name: "Mahesh Test"
    }
    localStorage.setItem('translations', JSON.stringify(translation));

    console.log(`🟢 LOADED TRANSLATION CONTENT`);

})();
