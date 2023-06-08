

    // useEffect(() => {
    //     console.log(url);
    //     const fetchData = async () => {
    //         fetch(url)
    //             .then(res => res.text())
    //             .then(rep => {
    //                 const jsObj = JSON.parse(rep.substring(47).slice(0, -2));
    //                 console.log(jsObj);
    //                 const cols = [];
    //                 jsObj.table.cols.forEach(heading => {
    //                     if (heading.label) {
    //                         cols.push(heading.label.toLowerCase().replace(/\s/g, ''))
    //                     }
    //                 });
    //                 jsObj.table.rows.forEach(main => {
    //                     const row = {};
    //                     cols.forEach((ele, i) => {
    //                         row[ele] = (main.c[i] != null) ? main.c[i].v : "";
    //                     })
    //                     // data.push(row);
    //                     setData(prev => [...prev, row])
    //                 })
    //             })
    //     }
    //     fetchData()
    // }, [])