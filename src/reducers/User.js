


export default (state = { DefaultuserState }, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                fullName: action.fullName,
                email: action.email,
                districtName: action.districtName,
                zoneName: action.zoneName,
                phoneNumber: action.phoneNumber,
                role: action.role,
                jwt:action.role,
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                fullName : '',
                email : '',
                districtName : '',
                zoneName: '',
                phoneNumber : '',
                role:'',
                jwt:'',
            }
        default:
            return state;
    }
}