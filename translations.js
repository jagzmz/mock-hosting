(() => {
    console.log(`🟠 LOADING TRANSLATION CONTENT`);
    const translation ={
        name: "Mahesh"
    }
    localStorage.setItem('translations', JSON.stringify(translation));

    console.log(`🟢 LOADED TRANSLATION CONTENT`);

})();
