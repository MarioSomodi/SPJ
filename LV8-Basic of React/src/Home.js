const oPredmeti = [
    {
        ime: "Osnove tehničkih sustava",
        odslusan: "Da"
    },
    {
        ime: "Operacjski sustavi",
        odslusan: "Ne"
    },
    {
        ime: "Baze podataka",
        odslusan: "Da"
    },    
    {
        ime: "Ekonomika startup poduzeća",
        odslusan: "Da"
    },    
    {
        ime: "Programiranje u .NET okolini",
        odslusan: "Da"
    },    
    {
        ime: "Osnove web programiranja",
        odslusan: "Da"
    },
    {
        ime: "Mrežno programiranje (i)",
        odslusan: "Ne"
    }
]

oPredmeti.map((oPredmeti) => 
    <li>{oPredmeti}</li>
);

export default function Home() {
    return (
    <ul>
        {oPredmeti.map((predmet, index) => (
            <li style={{color: (predmet.odslusan==="Da") ? "green" : "grey"}} key = {index}>{predmet.ime}</li>
        ))}
    </ul>
    );
}