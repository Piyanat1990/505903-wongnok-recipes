

const Manus = [{
        id: 1,
        title: `ต้มยำกุ้ง`,
        image_url: `https://media.istockphoto.com/id/1038952330/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B9%8D%E0%B8%B2%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%8B%E0%B8%B8%E0%B8%9B%E0%B9%83%E0%B8%AA%E0%B8%A3%E0%B8%AA%E0%B9%80%E0%B8%9C%E0%B9%87%E0%B8%94%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=Cn7iG9Qsmrq7cXrYZxONzchgdxsmfR03LIdP0xm01us=`,
        ingredients: `กุ้งแม่น้ำ 3 ตัว
        เห็ดฟาง 100 กรัม
        ตะไคร้หั่นบาง 10 กรัม
        ตะไคร้หั่นท่อนบุบ 16 กรัม
        รากผักชี 2 กรัม
        ใบมะกรูดฉีก 3 ใบ
        น้ำต้มกระดูก 300 กรัม
        พริกขี้หนูสวนบุบ 10 กรัม
        น้ำปลา 3 ช้อนโต๊ะ
        น้ำมะนาว 3 ช้อนโต๊ะ
        นมข้นจืด 120 กรัม
        น้ำพริกเผา 2 ช้อนโต๊ะ
        ผักชี`,
        instructions: `1. ต้มน้ำต้มกระดูกโดยใส่เปลือกกุ้ง ตะไคร้หั่นท่อน และรากผักชี เมื่อเดือดยกลง
        กรองเอาแต่น้ำเป็นน้ำสต็อก
        2. นำน้ำสต็อกตั้งไฟ ใส่ตะไคร้ เห็ดฟาง พอน้ำเดือดใส่กุ้งรอจนเดือดแล้วใส่น้ำปลา ฉีกใบมะกรูดใส่ลงไป
        3. ละลายน้ำพริกเผากับนมข้นจืดในชามเสิร์ฟ คนให้เข้ากัน เติมน้ำมะนาว พริกขี้หนูบุบ
        4. ตักต้มยำใส่ชามเสิร์ฟ โรยหน้าด้วยผักชี`,
        cooking_time: `20`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 2,
        title: `ผัดกะเพราหมู`,
        image_url:`https://media.istockphoto.com/id/1696769740/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%9A%E0%B9%82%E0%B8%AB%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%94%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B8%A1%E0%B8%B0%E0%B8%A5%E0%B8%B4%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%94%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=MZZqBLnl4Gg_AcLmXo9t1VXbij68R3NnuIvtgMX3BKw=`,
        ingredients: `หมูหั่นสี่เหลี่ยมเล็กๆ 150 กรัม
        เห็ดฟาง (ไม่ใส่ก็ได้) 50 กรัม
        พริกขี้หนูสับ 10 กรัม
        กระเทียมสับ 10 กรัม
        ใบกระเพรา 20 กรัม
        น้ำปลา 1 ช้อนโต๊ะ
        น้ำตาลทราย ¼ ช้อนชา
        น้ำมันสำหรับผัด 2 ช้อนโต๊ะ
        น้ำต้มกระดูก 3 ช้อนโต๊ะ`,
        instructions: `1. นำเห็ดฟางมาล้างทำความสะอาด แบ่งเห็ดออกเป็นสองถึงสี่ส่วน ขึ้นอยู่กับขนาดของเห็ด
        2. ตำพริกขี้หนู และกระเทียมพอหยาบ เตรียมไว้
        3. ตั้งกะทะใส่น้ำมันให้ร้อน นำพริกขี้หนูและกระเทียมที่ทำไว้ลงผัดให้หอม ใส่เนื้อหมู ผัดจนเกือบสุกใส่เห็ดฟาง และน้ำต้มกระดูก ผัดต่อจนเห็ดและเนื้อหมูสุก
        4. ปรุงรสด้วยน้ำปลา น้ำตาลทราย ผัดให้เข้ากัน ใส่ใบกระเพรา ผัดให้ทั่ว ตักใส่จานเสิร์ฟ`,
        cooking_time: `15`,
        difficulty_level: `ง่าย`
    },
    {
        id: 3,
        title: `แกงส้มกุ้งผักรวม`,
        image_url:`https://www.ajinomoto.co.th/storage/photos/shares/Recipe/Menu/Lot4-21/61e96bb326096.jpeg`,
        ingredients: `กุ้ง 150 กรัม
        ถั่วฝักยาวหั่นท่อน 80 กรัม
        ดอกแค ผักบุ้ง น้ำเต้าอ่อน หรือผักตามชอบ 200 กรัม
        
        ส่วนผสมน้ำแกง
        เนื้อปลาช่อนต้ม 50 กรัม
        น้ำพริกแกงส้ม 40 กรัม
        น้ำ 500 กรัม
        น้ำมะขามเปียก 4 ช้อนโต๊ะ
        น้ำตาลทราย 15 กรัม
        น้ำปลา 2 ช้อนโต๊ะ
        
        `,
        instructions: `1. โขลกเนื้อปลากับเครื่องแกงส้มให้เข้ากัน แล้วพักไว้
        2. ทำความสะอาดกุ้ง ผ่าหลัง เอาเส้นดำออก แล้วพักไว้
        3. ต้มน้ำให้เดือด ใส่เครื่องแกงส้มที่โขลกกับเนื้อปลา คนให้ละลายพอเดือด ใส่ผักที่เตรียมไว้ ต้มจนสุก
        4. ปรุงรสด้วย น้ำตาลปี๊บ น้ำมะขามเปียก น้ำปลา คนให้ทั่วจนส่วนผสมเข้ากันดีแล้ว ใส่กุ้ง ต้มจนสุก
        ตักใส่ชามเสิร์ฟ
        `,
        cooking_time: `40`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 4,
        title: `ต้มข่าไก่`,
        image_url:`https://s359.kapook.com/pagebuilder/f103aacb-cbd7-4e82-9e73-c134b2551aef.jpg`,
        ingredients: `เนื้อไก่หั่น 150 กรัม
        ข่าอ่อนขาวหั่นแว่นบาง 50 กรัม
        เห็ดฟาง 100 กรัม
        หัวกะทิ 250 กรัม
        น้ำต้มกระดูก 100 กรัม
        พริกขี้หนูสวนบุบ 10 เม็ด
        น้ำมะนาว 3 ช้อนโต๊ะ
        น้ำมะขามเปียก ½ ช้อนโต๊ะ
        น้ำปลา 3 ช้อนโต๊ะ
        ใบมะกรูด 2 ใบ
        ผักชี`,
        instructions: `1 ต้มน้ำต้มกระดูก ใส่ข่าอ่อน ต้มสักพักหนึ่ง ให้กลิ่นข่าออก แล้วใส่หัวกะทิลงไปคนให้เข้ากัน
        ระวังอย่าให้แตกมัน
        2 พอเดือดใส่น้ำปลา เนื้อไก่ น้ำมะขามเปียก รอให้เดือดอีกรอบใส่เห็ดฟาง ใบมะกรูด พริกขี้หนู
        3 ปรุงรสด้วยน้ำมะนาว คนให้พอเข้ากัน โรยหน้าด้วยผักชี ตักใส่ชามเสิร์ฟ`,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 5,
        title: `แกงเขียวหวานลูกชิ้นปลากราย`,
        image_url:`data:image/jpeg;base64,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`,
        ingredients: `ลูกชิ้นปลากราย 250 กรัม
        มะเขือเปราะ 100 กรัม
        หัวกะทิ 100 กรัม
        หางกะทิ 500 กรัม
        น้ำพริกแกงเขียวหวาน 40 กรัม
        น้ำตาลปี๊บ 15 กรัม
        น้ำปลา 2 ช้อนโต๊ะ
        พริกชี้ฟ้าแดงหั่นเฉียง 4 เม็ด
        โหระพา 4 กรัม
        ใบมะกรูด 2 ใบ`,
        instructions: `1) ผัดหัวกะทิให้แตกมัน ใส่เครื่องแกงลงผัดกับหัวกะทิให้หอม จากนั้นใส่ลูกชิ้นปลากรายลงผัด
        2) ใส่หางกะทิลงไป ตั้งให้เดือด เคี่ยวให้เนื้อสุกนุ่ม ใส่มะเขือเปราะ ปรุงรสด้วยน้ำปลา น้ำตาลปี๊บ
        3) ใส่พริกชี้ฟ้า ใส่ใบมะกรูดฉีก ใส่ใบโหระพา
        4) ตักใส่ชามเสิร์ฟ
        `,
        cooking_time: `45`,
        difficulty_level: `ยาก`
    },
    {
        id: 6,
        title: `แกงจืดมะระยัดไส้หมูสับ`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/df4f7-jpg.jpeg`,
        ingredients: `มะระจีน 1 ผล
        หมูสับ 200 กรัม
        วุ้นเส้นแช่น้ำตัดเป็นเส้นสั้น ½ ถ้วย
        น้ำตาลทราย 1 ช้อนชา
        น้ำมันหอย 1 ช้อนโต๊ะ
        ซีอิ๊วขาว 1 ช้อนโต๊ะ
        รากผักชี 5 ราก
        (สับละเอียด 2 รากผสมกับหมู ที่เหลือบุบใส่ในน้ำซุป)
        กระเทียมสับละเอียด 2 ช้อนชา
        เกลือป่นเล็กน้อย
        พริกไทยป่นเล็กน้อย
        เห็ดหอมแช่น้ำตัดก้านออก 4 – 6 ดอก
        น้ำซุป 3 ถ้วย`,
        instructions: `1.เตรียมมะระโดยหั่นเป็นท่อนยาวประมาณ 2 นิ้ว คว้านไส้ออก โรยเกลือป่นให้คลุกเคล้าให้ทั่วชิ้นมะระ
        พักไว้ 20 นาที ล้างออกด้วยน้ำสะอาด สะเด็ดน้ำพักไว้
        2.ผสมหมูสับ วุ้นเส้นกับน้ำตาลทราย น้ำมันหอย ซีอิ๊วขาว รากผักชี เกลือป่น พริกไทยป่น คลุกเคล้าให้เข้ากันดี ยัดส่วนผสมหมูในท่อนมะระกดให้แน่น ใส่แต่พอดีอย่าให้ล้น เมื่อสุกแล้วหมูจะดันตัวออกมานอกชิ้นมะระเล็กน้อย
        3.นำน้ำซุปตั้งไฟให้เดือด เติมรากผักชี เห็ดหอม มะระ ต้มจนมะระสุก หรี่ไฟลง เคี่ยวด้วยไฟอ่อนต่ออีกประมาณ 1 ชม. จนมะระเปื่อยดี หมั่นช้อนฟองออกปรุงรสด้วยเกลือป่น และซีอิ๊วขาว ได้อีกตามชอบ ตักเสิร์ฟโรยหน้าด้วยผักชี`,
        cooking_time: `40`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 7,
        title: `แกงเทโพ`,
        image_url:`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.easycookingmenu.com%2Findex.php%2Feasycooking%2F%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B8%2582%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%25A7-%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B9%2581%25E0%25B8%2581%25E0%25B8%25A5%25E0%25B9%2589%25E0%25B8%25A1%2F%25E0%25B9%2581%25E0%25B8%2581%25E0%25B8%2587%25E0%25B9%2580%25E0%25B8%2597%25E0%25B9%2582%25E0%25B8%259E-2&psig=AOvVaw3POKw1DRsQ4Gg2AfM-TpT3&ust=1712793392787000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjonf2qtoUDFQAAAAAdAAAAABAE`,
        ingredients: `มะพร้าวขูดประมาณ 500 กรัม
        (คั้นให้ได้หัวกะทิ 1 ถ้วย และน้ำกะทิ 3 ½ ถ้วย)
        ผักบุ้งไทย 1 กำ
        หมูสามชั้น 200 กรัม
        น้ำมะขามเปียกประมาณ 4 – 5 ช้อนโต๊ะ
        น้ำตาลปี๊บ ½ ช้อนโต๊ะ
        น้ำปลาประมาณ 2 ช้อนโต๊ะ
        เกลือป่น 2 หยิบมือ
        มะกรูด 1 ลูก
        ใบมะกรูด 4 – 5 ใบใหญ่
        
        ส่วนผสมพริกแกงเทโพ
        พริกแห้ง 10 เม็ด
        ข่า 3 แว่น
        ตะไคร้หั่นฝอย 2 ต้น
        ผิวมะกรูด 1 ช้อนชา
        พริกไทยเม็ด 10 เม็ด
        หอมแดง 3 หัว
        กระเทียม 5 กลีบ
        รากผักชีหั่น 3 ต้น
        กะปิ 1 ช้อนโต๊ะ
        เกลือเม็ดนิดหน่อย`,
        instructions: `1. ทำน้ำพริกแกงก่อน ด้วยการนำพริกแห้งมาแช่น้ำให้นุ่ม แล้วนำไปโขลกกับเกลือเม็ดพอแหลก
        2. ใส่ข่า ผิวมะกรูด รากผักชีและพริกไทยเม็ดลงไป โขลกให้ละเอียด จึงใส่หอมแดง กระเทียมและกะปิ โขลกส่วนผสมทุกอย่างให้ละเอียด เนียนเข้ากันดี
        3. เตรียมเครื่องปรุง นำหมูสามชั้นมาล้างทำความสะอาด หั่นเป็นชิ้นหนาประมาณ 0.5 เชนติเมตร ลูกมะกรูดผ่าครึ่ง เอาเมล็ดออก ส่วนใบมะกรูดเลือกใช้ใบแก่หน่อยจะได้มีกลิ่นหอม ล้างน้ำแล้วฉีกเป็นชิ้นเล็กๆ เตรียมไว้
        4. นำมะขามเปียกแช่น้ำ คั้นให้ได้น้ำมะขามเปียกประมาณครึ่งถ้วย
        5. นำผักบุ้งมาตัดส่วนโคน เลือกเฉพาะส่วนที่ยังอ่อน ล้างน้ำสะอาด เลือกใบเสียออกให้หมด จากนั้น หั่นเป็นท่อน แช่น้ำเตรียมไว้
        6. ตั้งกระทะใช้ไฟกลาง แล้วเทหัวกะทิลงไปในกระทะครึ่งหนึ่ง รอให้กะทิเดือดและแตกมัน ระหว่างนี้หมั่นคนเป็นระยะๆ ไม่ให้กะทิจับตัวกันเป็นก้อน
        7. พอกะทิแตกมันดีแล้ว ใส่พริกแกงลงไปประมาณ 1 ขีด ยีพริกแกงให้เข้ากับกะทิผัดไปเรื่อยๆ ถ้าแห้งให้เติมน้ำหางกะทิลงไป จนเริ่มส่งกลิ่นหอม และแตกมันสวยงาม
        8. พอพริกแกงแตกมันใส่หมูสามชั้นลงไป ผัดหมูให้เข้ากับพริกแกง พอหมูเริ่มจะสุก ค่อยๆเทหางกะทิ ที่เหลือลงไป
        9. จากนั้นเร่งไฟให้แรงขึ้น ปรุงรสโดยใส่น้ำตาลปี๊บ น้ำมะขามเปียก เกลือป่น และน้ำปลา 2 ช้อน ชิมดู ให้ได้รสเปรี้ยวเค็มหวาน
        10. พอน้ำแกงเดือดจัด นำเอาผักบุ้งกับลูกมะกรูดที่เตรียมไว้ใส่ลงไป ใช้ตะหลิวกดให้ผักบุ้งจมน้ำแกง จนผักบุ้งสุกดีใส่ใบมะกรูดใส่ลงไป ราดด้วยหัวกะทิที่เหลืออีก ½ ถ้วยลงไป คนให้เข้ากัน รอเดือด อีกครั้งปิดไฟ ตักใส่ชามรับประทานเป็นกับข้าว`,
        cooking_time: `60`,
        difficulty_level: `ยาก`
    },
    {
        id: 8,
        title: `แกงเผ็ดไก่ใส่หน่อไม้`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/a5119-jpg.jpeg`,
        ingredients: `เนื้ออกไก่ 200 กรัม
        เครื่องแกงเผ็ด 40 กรัม
        หัวกะทิ 100 กรัม
        หางกะทิ 400 กรัม
        หน่อไม้เส้นต้มจืดแล้ว 100 กรัม<
        น้ำปลา 1 ช้อนโต๊ะ
        น้ำตาลปี๊บ 15 กรัม
        ใบโหระพา 4 กรัม
        พริกชี้ฟ้าแดงหั่นเฉียง 2 กรัม
        พริกชี้ฟ้าเขียวหั่นเฉียง 2 กรัม
        ใบมะกรูด 2 ใบ`,
        instructions: `1. แบ่งหัวกะทิส่วนหนึ่งผัดให้แตกมัน ใส่เครื่องแกงเผ็ดลงผัด แล้วใส่หัวกะทิ ส่วนที่เหลือผัดจนหอม
        2. ใส่เนื้อไก่ลงผัดต่อจนเริ่มสุก เทลงในหม้อ ใส่หางกะทิ พอเดือดปรุงรสด้วยน้ำปลา น้ำตาลปี๊บ พอเดือดใส่หน่อไม้ที่เตรียมไว้ ทิ้งไว้สักพักให้เดือด แล้วฉีกใบมะกรูดใส่
        3. ใส่พริกชี้ฟ้าและใบโหระพา คนให้เข้ากันตักใส่ชามเสิร์ฟ`,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 9,
        title: `แกงมัสมั่นไก่`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/cb509-jpg.jpeg`,
        ingredients: `เนื้อสะโพกหรือน่องไก่ 300 กรัม
        เครื่องแกงมัสมั่น 40 กรัม
        หัวกะทิ 100 กรัม
        หางกะทิ 300 กรัม
        น้ำต้มกระดูก 250 กรัม
        ถั่วลิสงคั่ว 50 กรัม
        มันฝรั่ง 100 กรัม
        หัวหอมแขก 100 กรัม
        น้ำตาลปี๊บ 30 กรัม
        น้ำมะขามเปียก 2 ช้อนโต๊ะ
        เกลือป่น 1 ช้อนชา
        ลูกกระวาน 3 กรัม
        ใบกระวาน 2 กรัม`,
        instructions: `1. เคี่ยวกะทิให้แตกมัน ใส่เครื่องแกงมัสมั่น ผัดให้หอม แบ่งหางกะทิเป็น 2 ส่วน นำครึ่งหนึ่งผัดกับเครื่องแกง พอเดือด ใส่ไก่ลงไป เติมหางกะทิที่เหลือ
        2. ใส่น้ำต้มกระดูก พอเดือด ใส่ลูกกะวาน ใบกะวาน ถั่วลิสง มันฝรั่ง เคี่ยวจนเนื้อไก่นุ่ม มันฝรั่งสุก แล้วจึงปรุงรสด้วย เกลือป่น น้ำตาลปี๊บ น้ำมะขามเปียก
        3. ใส่หัวหอมแขก เคี่ยวต่อจนน้ำงวด
        4. ตักใส่ภาชนะเสิร์ฟ`,
        cooking_time: `45`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 10,
        title: `แกงเลียงกุ้งสด`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/a9744-jpg.jpeg`,
        ingredients: `กุ้งสดขนาดกลาง 350 กรัม
        (ปอกเปลือกผ่าหลังทำความสะอาดแล้ว)
        ข้าวโพดอ่อนหั่นชิ้น 1 ถ้วยตวง
        บวบปอกเปลือกหั่นชิ้น 1 ถ้วยตวง
        ฟักทองปอกเปลือกหั่นชิ้น 1 ถ้วยตวง
        ใบแมงลัก ½ ถ้วยตวง
        น้ำเปล่า 4 ถ้วยตวง
        
        ส่วนผสมน้ำพริกแกงเลียง
        พริกไทยเม็ด 12 เม็ด
        หอมแดง 12 ลูก
        กะปิ 1 ช้อนโต๊ะ
        กุ้งแห้ง ½ ถ้วยตวง
        น้ำปลา 2 ช้อนโต๊ะ`,
        instructions: `1. นำส่วนผสมน้ำพริกแกงไปโขลกให้เข้ากัน
        2. ต้มน้ำในหม้อ ใส่น้ำพริกแกงเลียงลงไป คนให้เครื่องแกงละลาย
        3. เมื่อน้ำซุปเดือด ปรุงรสด้วยน้ำปลา รอสักพักจึงใส่กุ้งและผักสดลงไป
        4. เมื่อกุ้งและผักสุกดีแล้ว ปิดไฟ ตักใส่ถ้วย และเสิร์ฟร้อนๆ`,
        cooking_time: `20`,
        difficulty_level: `ง่าย`
    },
    {
        id: 11,
        title: `ขนมจีนน้ำยาปลาช่อน`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/c8fb3-jpg.jpeg`,
        ingredients: `ปลาช่อน ½ กิโลกรัม
        หัวกะทิ 2 ถ้วยตวง
        ปลาร้า 2 ช้อนโต๊ะ
        น้ำปลา 4 ช้อนโต๊ะ
        น้ำตาลทราย 2 ช้อนชา
        ขนมจีน 1 กิโลกรัม
        
        เครื่องเคียง เช่น ถั่วงอก ผักกาดดอง ถั่วฝักยาว ผักกระเฉด ใบแมงลัก พริกป่น ไข่ต้ม ฯลฯ
        
        ส่วนผสมเครื่องน้ำพริก
        พริกขี้หนูแห้งประมาณ 20 – 25 เม็ด
        กระเทียมซอย 4 ช้อนโต๊ะ
        หอมแดงซอย 4 ช้อนโต๊ะ
        ตะไคร้ซอย 3 ช้อนโต๊ะ
        ข่าซอย 1 ช้อนโต๊ะ
        กระชายซอย 150 กรัม
        น้ำสำหรับต้มปลาและเครื่องแกงประมาณ 3 – 4 ถ้วยตวง`,
        instructions: `1. ตั้งหม้อต้มน้ำพร้อมทั้งใส่เครื่องน้ำพริกทั้งหมด เมื่อน้ำเดือดให้ใส่ปลาที่ล้างสะอาดแล้วลงไปต้มให้สุก ตักเครื่องน้ำพริกและปลาขึ้นมาแกะก้างและหนัง โขลกเนื้อปลาให้ละเอียด แล้วพักไว้
        2. โขลกเครื่องน้ำพริกให้ละเอียด หรือนำไปใส่เครื่องปั่นให้ละเอียด ใส่น้ำพริกลงในน้ำต้มปลา เติมหัวกะทิตั้งไฟพอเดือด แล้วใส่เนื้อปลาลงไป
        3. ปรุงรสด้วยน้ำปลา และปลาร้ากรองเอาเฉพาะน้ำ เคี่ยวด้วยไฟอ่อน จนน้ำยาเริ่มข้น ชิมรสให้ได้ที่
        4. เมื่อจะรับประทาน นำขนมจีนใส่จานนำใส่จาน ตักน้ำยาราด รับประทานกับเครื่องเคียงที่เตรียมไว้`,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 12,
        title: `แกงส้มกุ้งผักรวม`,
        image_url:``,
        ingredients: ``,
        instructions: ``,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 13,
        title: `หมูสะเต๊ะ`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/309d1-jpg.jpeg`,
        ingredients: `เนื้อหมู 300 กรัม
        ข่าหั่นละเอียด ½ ช้อนชา
        ตะไคร้หั่นละเอียด 1 ช้อนชา
        ขมิ้นผง 2 กรัม
        ลูกผักชีคั่วป่น ½ ช้อนชา
        ยี่หร่าคั่วป่น ¼ ช้อนชา
        หัวกะทิ 40 กรัม
        เกลือป่น ½ ช้อนชา
        นมข้นหวาน 60 กรัม
        ไม้เสียบสะเต๊ะ
        
        ส่วนผสมน้ำจิ้ม
        หัวกะทิ 110 กรัม
        หางกะทิ 110 กรัม
        เครื่องแกงคั่ว 10 กรัม
        เครื่องแกงมัสมั่น 10 กรัม
        ลูกผักชีคั่วป่น ½ ช้อนชา
        ยี่หร่าคั่วป่น ¼ ช้อนชา
        ลูกกระวาน 2 ลูก
        ขมิ้นผง ½ ช้อนชา
        ถั่วลิสงคั่วป่นละเอียด 60 กรัม
        น้ำตาลปี๊บ 30 กรัม
        น้ำมะขามเปียก ½ ช้อนโต๊ะ
        เกลือป่น ½ ช้อนชา
        
        ส่วนผสมอาจาด
        น้ำตาลทราย ½ ถ้วยตวง
        น้ำส้มสายชู ½ ถ้วยตวง
        เกลือป่น ½ ช้อนชา
        แตงกวา 100 กรัม
        หัวหอมซอย 20 กรัม
        พริกชี้ฟ้าหั่นแว่น 20 กรัม`,
        instructions: `1. ล้างเนื้อหมู หั่นเป็นชิ้นบางพอประมาณ
        2. โขลกข่า ตะไคร้ ให้ละเอียด ผสมกับลูกผักชี ยี่หร่าคั่วป่น ขมิ้นผงคนให้เข้ากัน แล้วใส่น้ำกะทิลงไปเล็กน้อยคนให้เข้ากัน
        3. ใส่เกลือป่น กะทิที่เหลือและนมข้น คนให้เข้ากัน ให้เกลือป่นละลาย แล้วใส่เนื้อหมูลงไปคลุกเคล้าให้เข้ากัน หมักทิ้งไว้ 30 นาที แล้วนำหมูเสียบไม้
        4. นำไปปิ้งใช้ไฟแรงปานกลาง ขณะปิ้งพรมด้วยหางกะทิ จนไก่สุก นำเสิร์ฟพร้อมน้ำจิ้มและอาจาด
        
        วิธีทำน้ำจิ้ม
        1. เคี่ยวหัวกะทิจนแตกมัน ใส่เครื่องแกงทั้งหมดลงผัดจนหอม ใส่ลูกผักชีป่น ยี่หร่าป่น ขมิ้นผง ลงผัดต่อ ค่อยๆ ใส่หางกะทิลงจนหมด
        2. พอเดือดปรุงรสด้วยน้ำตาลปี๊บ เกลือป่น น้ำมะขามเปียก คนให้เข้ากันให้น้ำตาลละลาย ใส่ถั่วลิสงคั่วป่น เคี่ยวงวดเล็กน้อย ให้ถั่วนิ่ม ใส่ลูกกระวาน พอได้ที่ตักใส่ถ้วย
        
        วิธีทำอาจาด
        1. ผสมน้ำตาล เกลือป่น น้ำส้มสายชู เข้าด้วยกัน ตั้งไฟอ่อนพอละลาย เมื่อเดือดปิดไฟยกลงจากเตาตั้งส่วนผสมพักไว้ให้เย็น
        2. นำแตงกวา หอมแดงซอย พริกชี้ฟ้าซอย ใส่ถ้วย
        3. ราดด้วยน้ำอาจาดเวลาจัดเสิร์ฟ`,
        cooking_time: `90`,
        difficulty_level: `ยาก`
    },
    {
        id: 14,
        title: `ทอดมันปลากราย`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/0881a-jpg.jpeg`,
        ingredients: `เนื้อปลากรายขูด 200 กรัม
        น้ำพริกแกงคั่ว 40 กรัม
        ใบมะกรูดซอย 6 กรัม
        ไข่ไก่ 1 ฟอง
        เกลือป่น ¼ ช้อนชา
        น้ำตาลทราย ½ ช้อนโต๊ะ
        
        ส่วนผสมน้ำจิ้ม
        น้ำตาลทราย ½ ถ้วยตวง
        น้ำส้มสายชู ½ ถ้วยตวง
        เกลือป่น ½ ช้อนชา
        พริกแกงโขลก 4 กรัม
        แตงกวา 60 กรัม
        ถั่วลิสงป่น 20 กรัม
        ผักชี`,
        instructions: `1. นวดเนื้อปลากรายขูดที่เตรียมไว้ จนเนื้อปลาเริ่มจับตัวเป็นก้อน
        2. ผสมไข่ไก่ เกลือป่น น้ำตาลทราย เครื่องแกงคั่ว คนให้เข้ากัน เทผสมลงในเนื้อปลากรายที่นวดเตรียมไว้ ผสมให้เข้ากันโดยใช้มือนวด และฟาดไปมาจนเนื้อปลากรายเหนียว ใส่ใบมะกรูดซอย คลุกเคล้าให้เข้ากัน
        3. ปั้นส่วนผสมเป็นก้อนกลม แล้วกดให้แบนพอประมาณ นำไปทอดในน้ำมันร้อน ใช้ไฟแรงปานกลาง จนสุกเหลืองพอประมาณ
        
        วิธีทำน้ำจิ้ม
        1. ผสมน้ำตาลทราย น้ำส้มสายชู และเกลือคนให้เข้ากัน ยกขึ้นตั้งไฟอ่อน พอเดือดใส่พริกชี้ฟ้าโขลก พอเดือดอีกครั้งยกลงพักให้เย็น
        2. นำแตงกวาใส่ถ้วย ราดด้วยน้ำจิ้ม โรยถั่วลิสงคั่วป่น แต่งหน้าด้วยผักชี จัดเสิร์ฟคู่กับทอดมัน`,
        cooking_time: `40`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 15,
        title: `น้ำพริกมะขาม`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/df516-jpg.jpeg`,
        ingredients: `มะขามอ่อน 100 กรัม
        หมูสามชั้นสับ 250 กรัม
        พริกขี้หนูสวน 70 เม็ด
        กระเทียม 5 กลีบ
        กะปิ 2 ช้อนโต๊ะ
        น้ำตาลปี๊บ 100 กรัม
        น้ำปลา 1 ช้อนโต๊ะ
        เกลือป่น ½ ช้อนชา
        น้ำมันสำหรับผัด 3 ช้อนโต๊ะ`,
        instructions: `1. นำมะขามอ่อนไปขูดผิวล้างน้ำให้สะอาด แล้วนำมาใส่ครกตำพร้อมกับเกลือให้ละเอียด ตักออกจากครกพักไว้
        2. ตำพริกกระเทียมในครกพอแหลกดี เติมกะปิลงไป ตำให้เข้ากัน ใส่มะขามที่ตำไว้ละเอียดแล้ว
        3. ใส่น้ำตาลปี๊บและหมูสับ ตำส่วนผสมทุกอย่างให้เข้ากันดี
        4. ตั้งกระทะใส่น้ำมัน พอร้อนตักน้ำพริกจากครกลงไปผัดด้วยไฟอ่อน จนสุก และแห้งดี
        5. ตักใส่ถ้วยรับประทานพร้อมผักสด เช่น ขมิ้นขาว แตงกวา ถั่วพู`,
        cooking_time: `30`,
        difficulty_level: `ง่าย`
    },
    {
        id: 16,
        title: `น้ำพริกกะปิ`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/97d40-jpg.jpeg`,
        ingredients: `พริกขี้หนูสวน 10 – 12 เม็ด
        กะปิอย่างดี 2 ช้อนโต๊ะ
        กุ้งแห้งป่น 2 ช้อนโต๊ะ
        น้ำตาลปี๊บ 1 ช้อนโต๊ะ
        น้ำมะนาว 2 ช้อนโต๊ะ
        กระเทียมแกะเปลือก 10 กลีบ
        มะเขือเปราะ 2 ผล
        มะอึก 2 – 3 ผล`,
        instructions: `1. โขลกกะปิกับพริกขี้หนู กระเทียม พอละเอียดแล้ว ใส่กุ้งแห้งป่น โขลกให้เข้ากัน ซอยมะเขือเปราะ มะอึก ใส่ครก โขลกเบา ๆ ให้เข้ากัน
        2. ปรุงรสด้วย น้ำตาลปี๊บ น้ำมะนาว ชิมให้ได้รสตามชอบ
        3. ตักใส่ถ้วย รับประทานร่วมกับปลาทูทอด ชะอมชุบไข่ทอด ผักสดผักลวกชนิดต่างๆ`,
        cooking_time: `20`,
        difficulty_level: `ง่าย`
    },
    {
        id: 17,
        title: `ปลาทูต้มเค็ม`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/3cee3-jpg.jpeg`,
        ingredients: `ปลาทู 1 กิโลกรัม
        รากผักชี 3 ต้น
        พริกไทยเม็ด 10 เม็ด
        น้ำตาลปี๊บ 2 ช้อนโต๊ะ
        เกลือป่น 2 ช้อนชา
        น้ำกระเทียมดอง ½ ถ้วยตวง
        น้ำมะขามเปียก ½ ถ้วยตวง
        ซีอิ้วดำ 2 ช้อนโต๊ะ
        น้ำเปล่า 4 – 5 ถ้วยตวง
        กระเทียมดอง 2 หัว
        พริกแดงพริกเหลืองเม็ดใหญ่ 5 – 10 เม็ด
        ขิงแก่ซอย 2 ช้อนโต๊ะ`,
        instructions: `1. ปลาทูสดผ่าท้องควักไส้ออกให้สะอาด
        2. โขลกรากผักชี พริกไทยเม็ด ให้ละเอียด พักไว้
        3. ใส่เครื่องที่โขลกไว้ลงไปในชาม ผสมกับน้ำตาลปี๊บ เกลือป่น น้ำกระเทียมดอง น้ำมะขามเปียก ซีอิ้วดำ น้ำเปล่า ผสมให้เข้ากัน พักไว้
        4. ใส่กระเทียมดอง ขิงซอย และพริกทั้งเมล็ดบนตัวปลา
        5. นำเครื่องปรุงที่ผสมไว้ในชาม ราดบนตัวปลา นำขึ้นตั้งไฟพอเดือด แล้วลดไฟลงเคี่ยวไฟอ่อนๆ เวลาเคี่ยวถ้าน้ำในหม้องวดลง สามารถเติมน้ำเปล่า ใช้เวลาประมาณ 4 - 8 ชม. เอามือบี้ก้างดู ถ้าก้างเปื่อยจึงใช้ได้`,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 18,
        title: `ก๋วยเตี๋ยวผัดไทย`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/0fb50-jpg.jpeg`,
        ingredients: `เส้นจันทร์อบแห้ง 130 กรัม
        ถั่วงอกเด็ดหาง 160 กรัม
        กุ้ง 140 กรัม
        เต้าหู้แข็งหั่นตามยาว 80 กรัม
        ใบกุยช่ายหั่นท่อน 20 กรัม
        หัวผักกาดเค็มสับ 30 กรัม
        ถั่วลิสงคั่วบดหยาบ 30 กรัม
        กุ้งแห้ง 20 กรัม
        ไข่ไก่ 2 ฟอง
        หอมแดงสับละเอียด 2 หัว
        น้ำมันพืช 60 กรัม
        มะนาว
        ต้นกุยช่าย
        หัวปลี
        ส่วนผสมน้ำปรุงรส
        น้ำตาลปี๊บ 60 กรัม
        น้ำปลา 2 ½ ช้อนโต๊ะ
        น้ำตาลทราย 2 ช้อนชา
        น้ำมะขามเปียก 3 ½ ช้อนโต๊ะ
        พริกป่น 1 ช้อนชา`,
        instructions: `1. แช่เส้นจันทร์อบแห้งในน้ำจนเส้นนิ่ม (ประมาณ 30 นาที)
        2. ใส่น้ำมะขามเปียก น้ำปลา น้ำตาลปี๊บ น้ำตาลทราย ตั้งไฟคนให้ละลาย ใส่พริกป่นพอเดือดพักไว้
        3. ใส่น้ำมันพืชลงกระทะเล็กน้อย นำกุ้งรวนพอสุก ราดน้ำปรุงรสที่เตรียมไว้บางส่วนบนตัวกุ้งคลุกเคล้าเล็กน้อยพอให้กุ้งดูดซับน้ำปรุงรสจนทั่ว ใส่จานพักไว้
        4. รวนเต้าหู้ด้วยน้ำมันจนสุก จึงใส่หอมแดงสับ และหัวผักกาดเค็มสับลงผัดจนหอมจากนั้นใส่เส้นจันทร์ลงผัดจนเส้นเหนียวนุ่ม ราดน้ำปรุงรสที่เหลือลงบนเส้น ผัดจนเส้นเหนียวนุ่ม ผัดให้ทั่ว ให้เข้ากัน
        5. เกลี่ยเส้นกันไว้ด้านหนึ่งของกระทะ จากนั้นใส่น้ำมันเล็กน้อย ต่อยไข่ใส่ ยีเล็กน้อย พอเกือบสุก ตลบเส้นมากลบทับบนไข่ แบ่งกุ้งที่พักไว้ส่วนหนึ่งลงผัดรวมกัน ใส่ถั่วลิสงคั่วป่น และกุ้งแห้งผัดต่อให้เข้า กันดี ใส่ถั่วงอกบางส่วน และใบกุยช่าย ผัดให้เข้ากัน
        6. ตักใส่จานเสิร์ฟ แต่งหน้าด้วยกุ้งที่เหลือ เสิร์ฟพร้อมมะนาว ถั่วงอก ต้นกุยช่ายและหัวปลี`,
        cooking_time: `45`,
        difficulty_level: `ยาก`
    },
    {
        id: 19,
        title: `ปปป`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/a1f17-jpg.jpeg`,
        ingredients: `เนื้อหมู 150 กรัม
        แตงกวาหั่นสี่เหลี่ยมเปียกปูน 50 กรัม
        มะเขือเทศหั่นสี่เหลี่ยม 30 กรัม
        สับปะรดหั่นสี่เหลี่ยม 40 กรัม
        หอมใหญ่หั่นสี่เหลี่ยม 30 กรัม
        ต้นหอมหั่นท่อน 10 กรัม
        กระเทียมสับละเอียด 10 กรัม
        น้ำต้มกระดูก ¼ ถ้วยตวง
        น้ำมันพืชสำหรับผัด 2 ช้อนโต๊ะ
        น้ำปลา 1 ช้อนโต๊ะ
        น้ำตาลทราย ½ ช้อนโต๊ะ
        ซอสมะเขือเทศ 3 ช้อนโต๊ะ`,
        instructions: `1. ผัดหมูพอสุกพักไว้
        2. ผัดสับปะรด แตงกวา มะเขือเทศ หอมใหญ่ พักไว้
        3. ผสมเครื่องปรุง ได้แก่ ซอสมะเขือเทศ น้ำตาลทราย น้ำปลา น้ำต้มกระดูก ผสมให้เข้ากันพักไว้
        4. ตั้งกระทะใส่น้ำมันเล็กน้อย ผัดกระเทียมให้หอม แล้วใส่ผักที่เตรียมไว้ ใส่กุ้งและเครื่องเทศ ผัดให้ เข้ากัน ใส่ต้นหอมส่วนหนึ่ง คลุกเคล้าให้เข้ากัน
        5. ตักใส่จานเสิร์ฟ โรยหน้าด้วยต้นหอมส่วนที่เหลือ`,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 20,
        title: `ผัดพริกขิงหมู`,
        image_url:`http://www.thaifoodheritage.com/uploads/recipe_list/gallery/f2cff-jpg.jpeg`,
        ingredients: `เนื้อหมูสามชั้นหั่นชิ้นพอคำ 200 กรัม
        เครื่องแกงคั่ว 2 ช้อนโต๊ะ
        ถั่วฝักยาวหั่นชิ้นท่อน 1 ถ้วย
        น้ำมัน 3 ช้อนโต๊ะ
        น้ำตาลปี๊บ 1 ช้อนโต๊ะ
        น้ำปลา 2 ช้อนชา
        ใบมะกรูดซอย 1 ช้อนโต๊ะ
        พริกชี้ฟ้าแดงซอย 1 เม็ด`,
        instructions: `1. ลวกถั่วฝักยาวให้สุก นำขึ้นแช่ในน้ำเย็น ยกขึ้นให้สะเด็ดน้ำ พักไว้
        2. ผัดเครื่องแกงคั่วกับน้ำมันให้มีกลิ่นหอม
        3. ใส่หมูลงผัดให้สุก ปรุงรสด้วยน้ำตาลปี๊บและน้ำปลา ใส่ถั่วฝักยาวที่ลวกไว้ ใส่ใบมะกรูดซอยฝอย ส่วนหนึ่ง ผัดให้เข้ากัน
        4. จัดใส่จานเสิร์ฟ ตกแต่งด้วยพริกชี้ฟ้าแดง และใบมะกรูดซอย`,
        cooking_time: `20`,
        difficulty_level: `ง่าย`
    },
    {
        id: 19,
        title: ``,
        image_url:``,
        ingredients: ``,
        instructions: ``,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 19,
        title: ``,
        image_url:``,
        ingredients: ``,
        instructions: ``,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 19,
        title: ``,
        image_url:``,
        ingredients: ``,
        instructions: ``,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },
    {
        id: 19,
        title: ``,
        image_url:``,
        ingredients: ``,
        instructions: ``,
        cooking_time: `30`,
        difficulty_level: `ปานกลาง`
    },

]


console.table(Manus)