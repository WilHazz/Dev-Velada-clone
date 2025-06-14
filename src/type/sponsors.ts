type SponsorId = 
| "vicio"
| "revolut"
| "alsa"
| "spotify"
| "cerave"
| "grefusa"
| "maxibon"
| "infojobs"
| "cocacola"
| "mahou"
| "nothing"

type SponsorName = 
| "Vicio"
| "Revolut"
| "Alsa"
| "Spotify"
| "Cerave"
| "Grefusa"
| "Maxibon"
| "Infojobs"
| "Coca-cola"
| "Mahou"
| "Nothing"

export interface Sponsors {
    id: SponsorId
    name: SponsorName
    url: string
    image: {
        logo: any
        width: number
        height: number
    }
}