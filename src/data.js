import bannerKataNyata1 from './assets/CarKataNyataMarket.png';
import bannerKataNyata2 from './assets/CarFlazz.png';
import bannerKataNyata3 from './assets/CarThrift.png';
import bannerKataNyata4 from './assets/CarLombaMewarnai.png';
import bannerKataNyata5 from './assets/CarPTSNextStar.png';
import bannerKataNyata6 from './assets/CarDonorDarah.png';
import logoSec from './assets/Kata Jadi Nyata Secondary Logo.png'
import Godshand from './assets/Godshandword.png'
import Humanshand from './assets/Humanshandword.png'
import flyer1 from './assets/Flyer Thrift Market.png'
import flyer2 from './assets/Flyer Food&Fun Market.png'
import flyer3 from './assets/Flyer Donor Darah.png'
import flyer4 from './assets/Flyer Lomba Mewarnai.png'
import flyer5 from './assets/Flyer Pts Next Star.png'
import church1 from './assets/Feeds Bukel Week 1.jpg'
import church2 from './assets/Feeds Bukel Week 2.jpg'
import church3 from './assets/Feeds Bukel Week 3.jpg'
import church4 from './assets/Feeds Bukel Week 4.jpg'

const FnBTenantModules = import.meta.glob('./assets/Logo Tenant/FnB - *', { eager: true });
const FnBTenantImages = Object.fromEntries(
    Object.entries(FnBTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^FnB - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const HobbyTenantModules = import.meta.glob('./assets/Logo Tenant/Hobby - *', { eager: true });
const HobbyTenantImages = Object.fromEntries(
    Object.entries(HobbyTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Hobby - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const FunTenantModules = import.meta.glob('./assets/Logo Tenant/Fun- *', { eager: true });
const FunTenantImages = Object.fromEntries(
    Object.entries(FunTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Fun - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const HealthTenantModules = import.meta.glob('./assets/Logo Tenant/Health - *', { eager: true });
const HealthTenantImages = Object.fromEntries(
    Object.entries(HealthTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Health - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const EducationTenantModules = import.meta.glob('./assets/Logo Tenant/Education - *', { eager: true });
const EducationTenantImages = Object.fromEntries(
    Object.entries(EducationTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Education - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const BeautyTenantModules = import.meta.glob('./assets/Logo Tenant/Beauty - *', { eager: true });
const BeautyTenantImages = Object.fromEntries(
    Object.entries(BeautyTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Beauty - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const FashionTenantModules = import.meta.glob('./assets/Logo Tenant/Fashion - *', { eager: true });
const FashionTenantImages = Object.fromEntries(
    Object.entries(FashionTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Fashion - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);


const HospitalityTenantModules = import.meta.glob('./assets/Logo Tenant/Hospitality - *', { eager: true });
const HospitalityTenantImages = Object.fromEntries(
    Object.entries(HospitalityTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Hospitality - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const AutomotiveTenantModules = import.meta.glob('./assets/Logo Tenant/Automotive - *', { eager: true });
const AutomotiveTenantImages = Object.fromEntries(
    Object.entries(AutomotiveTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Automotive - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const FinanceTenantModules = import.meta.glob('./assets/Logo Tenant/Finance - *', { eager: true });
const FinanceTenantImages = Object.fromEntries(
    Object.entries(FinanceTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Finance - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);

const OthersTenantModules = import.meta.glob('./assets/Logo Tenant/Others - *', { eager: true });
const OthersTenantImages = Object.fromEntries(
    Object.entries(OthersTenantModules).map(([path, mod]) => {
        const fileName = path.split('/').pop().replace(/^Others - /, '').replace(/\.[^/.]+$/, '');
        return [fileName, mod.default];
    })
);





export const carouselData = [
    {
        id: 1,
        title: "Kata Nyata Bazar",
        image: bannerKataNyata1,
        link: "/bazar",
    },
    {
        id: 2,
        title: "Flazz Card",
        image: bannerKataNyata2,
        link: "https://gkipts.id/flazzkn",
    },
    {
        id: 3,
        title: "Kata Nyata Thrift Market",
        image: bannerKataNyata3,
        link: "https://www.instagram.com/p/DdxHbnSTxoG/?obrf=MTNuaDducHBvczls"
    },
    {
        id: 4,
        title: "Lomba Mewarnai Anak",
        image: bannerKataNyata4,
        link: "https://gkipts.id/lombamewarnai"
    },
    {
        id: 5,
        title: "Peterongan Next Star",
        image: bannerKataNyata5,
        link: "https://gkipts.id/lombabakat"
    },
    {
        id: 6,
        title: "Donor Darah",
        image: bannerKataNyata6,
        link: "https://gkipts.id/donordarahbukel26"
    }
]

export const logoFilosofi = [
    {
        id: 1,
        title: "Janji",
        image: logoSec,
        description: "Dua kelingking yang saling terkait: kepercayaan dan tanggung jawab menepati janji."
    },
    {
        id: 2,
        title: "Kata",
        image: Godshand,
        description: "Ikrar yang sungguh-sungguh. Titik merah mengingatkan pada luka Yesus, Sang Firman."
    },
    {
        id: 3,
        title: "Nyata",
        image: Humanshand,
        description: "Setiap janji dipanggil hadir dalam kehidupan, kesetiaan, dan pengorbanan."
    },
]

export const churchEvent = [
    {
        id: 1,
        imgsrc: church1,
        title: "Yang Tetap Menemani",
        alttitle: "Ibadah Minggu ke 1",
        speaker: "Pdt. Rinta Kurniawati",
        link: "https://www.youtube.com/results?search_query=gki+peterongan+yang+tetap+menemani",
    },
    {
        id: 2,
        imgsrc: church2,
        title: "Rumah Yang Lebih Luas",
        alttitle: "Ibadah Minggu ke 2",
        speaker: "Pdt. Helen Aramada Setyoputri",
        link: "https://www.youtube.com/results?search_query=gki+peterongan+rumah+yang+lebih+luas"
    },
    {
        id: 3,
        imgsrc: church3,
        title: "Menunggu Tanpa Memaksa",
        alttitle: "Ibadah Minggu ke 3",
        speaker: "Pdt. (Em.) Nathanael Channing",
        link: "https://www.youtube.com/results?search_query=gki+peterongan+menunggu+tanpa+memaksa",
    },
    {
        id: 4,
        imgsrc: church4,
        title: "Kata Jadi Nyata",
        alttitle: "Ibadah Minggu ke 4",
        speaker: "Pdt. (em.) Andreas Gunawan",
        link: "https://www.youtube.com/results?search_query=gki+peterongan+kata+jadi+nyata",
    },
]

export const carouselEvent = [
    {
        id: 1,
        imgsrc: flyer1,
        title: "Thrift Market",
        desc: "Masyarakat dapat berbelanja barang barang yang bagus dan berkualitas dengan harga starting dari Rp5.000",
        link: "https://www.instagram.com/p/DdxHbnSTxoG/?obrf=MTNuaDducHBvczls",
    },
    {
        id: 2,
        imgsrc: flyer2,
        title: "Food & Fun Market",
        desc: "Menikmati berbagai macam makanan serta bersenang senang bersama teman dan keluarga"
    },
    {
        id: 3,
        imgsrc: flyer3,
        title: "Donor Darah",
        desc: "Bekerja sama dengan PMI, masyarakat diajak untuk mendonorkan darahnya untuk membantu sesama",
        link: "https://gkipts.id/darahbukel26",
    },
    {
        id: 4,
        imgsrc: flyer4,
        title: "Lomba Mewarnai Anak",
        desc: "Untuk anak anak kalangan usia 6-12 tahun dapat mengikuti lomba mewarnai",
        link: "https://gkipts.id/lombamewarnai",
    },
    {
        id: 5,
        imgsrc: flyer5,
        title: "Peterongan Next Star",
        desc: "Jemaat dapat menunjukkan bakatnya dalam lomba Peterongan Next Star",
        link: "https://gkipts.id/lombabakat"
    },
]

export const FnBTenant = Object.entries(FnBTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const HobbyTenant = Object.entries(HobbyTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const FunTenant = Object.entries(FunTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const HealthTenant = Object.entries(HealthTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const EducationTenant = Object.entries(EducationTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const BeautyTenant = Object.entries(BeautyTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const HospitalityTenant = Object.entries(HospitalityTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const FashionTenant = Object.entries(FashionTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const AutomotiveTenant = Object.entries(AutomotiveTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const FinanceTenant = Object.entries(FinanceTenantImages).map(([name, img]) => ({
    name,
    img,
}));

export const OthersTenant = Object.entries(OthersTenantImages).map(([name, img]) => ({
    name,
    img,
}));