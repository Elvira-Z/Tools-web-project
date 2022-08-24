//a + b = 12
console.log('usefull')
//Динамическая загрузка файлов
loadScript('js/a.js', () => {
    console.log('from useFull -> a', a)
    loadScript('js/b.js', () => {
        console.log('from useFull -> b', a + b)
    })
});