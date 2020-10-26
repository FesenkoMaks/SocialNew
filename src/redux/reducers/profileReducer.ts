
type contactsType = {
    github: string | undefined
    vk: string | undefined
    facebook: string | undefined
    instagram: string | undefined
    twitter: string | undefined
    website: string | undefined
    youtube: string | undefined
    mainLink: string | undefined
}

type photosType = {
    small: string | null
    large: string | null
}

type profileInitialStateType = {
    userId: number | null
    lookingForAJob: boolean | undefined
    lookingForAJobDescription: boolean | undefined
    fullName: string | undefined
    contacts: contactsType
    photos: photosType
}

const initialState: profileInitialStateType = {
    userId: null,
    lookingForAJob: false,
    lookingForAJobDescription: false,
    fullName: undefined,
    contacts: {
        github: undefined,
        facebook: undefined,
        instagram: undefined,
        mainLink: undefined,
        twitter: undefined,
        vk: undefined,
        website: undefined,
        youtube: undefined
    },
    photos: {
        small: null,
        large: null
    }
}

export const profileReducer = (state: profileInitialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'ANY': {
            return state
        }
    }
}
