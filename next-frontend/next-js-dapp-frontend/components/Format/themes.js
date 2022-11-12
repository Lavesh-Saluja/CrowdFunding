const defaultTheme={
color:"#f0f7f4",
bgColor :"#eba0e6",
bgImg:"linear-gradient(to bottom right, #EBA0E6 15%, #A6739A 66%, #BA599D 100%);"
}

const dark={
    color: '#fff',
    bgColor: '#923cb5',
    bgImage: 'linear-gradient(180deg, #2f0f3d 5%, #000000 90%)',
    bgDiv: 'black',
    bgSubDiv: 'rgb(33, 36, 41)'
}

const light={
    color: "#000",
    bgColor: '#efe7fd',
    bgImage: 'linear-gradient(180deg, #efe7fd 0%, #bdccf7 60%)',
    bgDiv: '#fff',
    bgSubDiv: '#efe7fd'

}

const themes={
    defaultTheme: defaultTheme,
    dark:dark,
    light:defaultTheme,
}

export default themes;