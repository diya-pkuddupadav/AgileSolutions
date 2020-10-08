const data = {
    "client_id": "BRphak8h3YqAhP67Jxs0XSnmzrqfYlQn",
    "client_secret":"MFITDWbKbGcWIse1wP3h247LLIGwSl032o4ebP18k-x2AeCgZVeLHEInh6TpwZL8",
    "Callback_URL":"https://praveen-testing.atlassian.net/plugins/servlet/ac/com.example.myplanningapp/index?project.key=TP&project.id=10000",
    "YOUR_USER_BOUND_VALUE":"",
    "API":{
        getAuth:'https://auth.atlassian.com/oauth/token'
    },
    "BaseURL": "https://praveen-testing.atlassian.net/"
}
data.REST_API_authorization_URL = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${data.client_id}&scope=read%3Ame%20read%3Ajira-work%20manage%3Ajira-project%20manage%3Ajira-configuration%20manage%3Ajira-data-provider%20read%3Ajira-user%20write%3Ajira-work%3Areport:personal-data%3Awrite:servicedesk-request%3Aread:servicedesk-request%3Amanage:servicedesk-customer&redirect_uri=${data.Callback_URL}&state=${data.YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent`

export default data;

