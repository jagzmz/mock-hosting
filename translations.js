(() => {
    console.log(`🟠 LOADING TRANSLATION CONTENT`);
    const translation ={
        name: "Adnan Test"
    }
    localStorage.setItem('translations', JSON.stringify(translation));

    console.log(`🟢 LOADED TRANSLATION CONTENT`);

})();
