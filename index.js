const express = require('express');
const app = express();
const port = 5500

app.get('/',(req,res)=> {
    res.send('Halo saya sedang belajar express')
})

app.get('/buku',(req,res)=> {
    res.send('Halo world')
})

//params
app.get('/buku/:thTerbit',(req,res)=> {
    const thTerbit = req.params.thTerbit;

    res.send(`Buku yang terbit pada tahun : ${thTerbit} telah tersedia`)
});

//params
app.get('/buku/:penerbit/:thTerbit',(req,res)=> {
    const thTerbit = req.params.thTerbit;
    const penerbit = req.params.penerbit;

    res.send(`Buku yang diterbitkan oleh : ${penerbit} dan terbit pada tahun : ${thTerbit} telah tersedia`)
});

//query
app.get('/get-buku-by-thTerbit', (req,res) => {
    const thTerbit = req.query.thTerbit;

    res.send(`buku yang terbit pada tahun : ${thTerbit} telah tersedia`)
});

//query2
app.get('/buku-penerbit', (req,res) => {
    const penerbit = req.query.penerbit;
    const thTerbit = req.query.thTerbit;

    res.send(`buku yang diterbitkan oleh ${penerbit} pada tahun : ${thTerbit} telah tersedia`)
});

//body
app.use(express.json())

app.post('buku', (req,res)=> {
    //contoh body
    const penerbit = req.body.penerbit;
    const thTerbit = req.body.thTerbit;
    const judul = req.body.judul;

    const msg = { status : "sukses",
                  data : {"penerbit":penerbit, "Tahun":thTerbit, "judul":judul }};

    res.send(msg)
})

app.post('/',(req,res)=> {
    res.send('Memposting data')
})

app.put('/',(req,res)=> {
    res.send('data sudah berhasil di update')
})

app.delete('/',(req,res)=> {
    res.send('data berhasil di hapus')
})

app.listen(port,()=> {
    console.log(`server berjalan pada localhost:${port}`)
});