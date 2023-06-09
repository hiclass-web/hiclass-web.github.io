const { readFileSync, writeFileSync } = require('fs');

const template = readFileSync('./extra.html', 'utf8');

const data_list = [
    {
        lecture: '프로그래밍방법론',
        professor: '민경주',
        email: 'kjminn2001@naver.com',
        // profile_picture: '/assets/bang.png',
        table: '/assets/tables/methodology.svg'
    }, 
    {
        lecture: '웹프로그래밍기초',
        professor: '김현정',
        email: 'khyunjung@naver.com',
        table: '/assets/tables/webbasic.svg',
    },
    {
        lecture: '프로그래밍언어실습',
        professor: '강은영',
        email: 'eykang1@dongyang.ac.kr',
        table: '/assets/tables/language.svg',
    },
    {
        lecture: '정보처리기초',
        professor: '장용미',
        email: 'changmi29@dongyang.ac.kr',
        // profile_picture: '/assets/jeong.png',
        table: '/assets/tables/process.svg',
    },
    {
        lecture: '컴퓨터공학기초',
        professor: '김덕은',
        email: 'kde321@naver.com',
        table: '/assets/tables/engineering.svg',
    },
    {
        lecture: '진로설계와실천인성',
        professor: '우버들',
        email: 'wbd79@dongyang.ac.kr',
        table: '/assets/tables/culture.svg',
    }
];

data_list.forEach(data => {
    let html = template;

    for (const key in data) {
        html = html.replace(`{{${key}}}`, data[key]);
    }

    const tablename = data.table;

    writeFileSync(`./detail/${tablename.split('/')[3].split('.')[0]}.html`, html);
})