import { createDirectus, rest, readItem, readItems, readField, staticToken } from '@directus/sdk';
import 'dotenv/config'

const client = createDirectus(process.env.DIRECTUSURL)
.with(staticToken(process.env.DIRECTUSTOKEN))
.with(rest());

async function getConstants()
{
	const companyRoles = await client.request(readItems ('Company_Roles', {
		fields: [
			"id",
			"role"
		]
	}));

	var eduRoles = await client.request(readItems ('Edu_Roles', {
		fields: [
			'id', 'role'
		]
	}));

	const hireTypes = await client.request(readItems ('Hire_Types', {
		fields: [
			"id",
			"type"
		]
	}));

	var mappedHireTypes = hireTypes.map((e)=>{
		return {
			value: e.id,
			label: e.type
		}
	})

	return {
		companyRoles: companyRoles,
		eduRoles: eduRoles,
		hireTypes: mappedHireTypes
	}
}

async function getAvatar(user_id)
{
	var image = await client.request(readItems ('User_Image', {
		fields: [
			'image'
		],
		filter: {
			user_id: {
				_eq: user_id,
			}
		},
	}));

	return getImageURL(image[0].image);
}

function getImageURL(id)
{
	return `${process.env.IMAGEURL}${id}`;
}

async function getUserInfo(mail)
{
	const id = (await getUserID(mail))[0].id
	const user = await client.request(readItem ('User', id))
	const hire = await getHire(id)
	const companies = await getCompanies(id)
	const institutions = await getInstitutions(id)
	const social = await getSocialNetworks(id)

	return {
		user: user,
		hire: hire,
		companies: companies,
		edu: institutions,
		social: social
	}

}

async function getHire (user_id)
{
	var hire = await client.request(readItems ('Hire', {
		fields: [
			'types.Hire_Types_id.*',
			'available'
		],
		filter: {
			user_id: {
				_eq: user_id,
			}
		},
	}));

	return hire.map((e) => ({
		available: e.available,
		types: prepareTypes(e.types)
	}));
}

function prepareTypes(input)
{
	let output = []
	
	input.forEach((element)=>{
		var item = 
		{
			value: element.Hire_Types_id.id,
			label: element.Hire_Types_id.type
		}
		output.push(item);
	})

	return output;
}

async function getCompanies (user_id)
{
	var companies = await client.request(readItems ('User_Company', {
		fields: [
			'company.id',
			'company.name', 
			'company.logo',
			'company.description', 
			'company.website',
			'company.status',
			'company.uuid',
			'company.fields',
			'status'
		],
		filter: {
			_and:[
				{
					user: {
						_eq: user_id,
					}
				},
				{
					role: {
						id: {
							_eq: 1
						}
					}
				}
			]
		},
	}))

	return companies.map((e, index)=>({
		name: e.company.name,
		logo: e.company.logo,
		description: e.company.description,
		website: e.company.website,
		fields: e.company.fields,
		status: e.company.status,
		uuid: e.company.uuid
	}));
}

async function getInstitutions (user_id)
{
	var result = await client.request(readItems ('User_EduInstitution', {
		fields: [
			'institution.name', 'role.role'
		],
		filter: {
			user: {
				_eq: user_id,
			}
		},
	}));

	return result.map((data)=>({
		name: data.institution.name,
		role: data.role.role
	}));
}

async function getUserID (mail)
{
	var result = await client.request(readItems ('User', {
			fields: [
				"id"
			],
			filter: {
				email: {
					_eq: mail,
				}
			}
		}))
	return result;
}

async function getSocialNetworks (user_id)
{
	var result = await client.request(readItems ('SocialNetworks2', {
		fields: [
			'nuget', 'github', 'fields'
		],
		filter: {
			user_id: {
				_eq: user_id,
			}
		},
	}));

	return result[0];
}

export { getUserID, getUserInfo, getConstants }

///WORKS FOR
// var workFor = await client.request(readItems ('User_Company', {
// 	fields: [
// 		'company.name', 'role.id', 'status', 'uuid'
// 	],
// 	filter: {
// 		_and: [
// 			{
// 				user: {
// 					_eq: user_id,
// 				}
// 			},
// 			{
// 				role: {
// 					role:{
// 						_neq: "Owner"
// 					}
// 				}
// 			}
// 		]
// 	},
// }))

// workFor = workFor.map((e)=>{
// 	return {
// 		status: e.status,
// 		company: e.company.name,
// 		role: e.role.id,
// 		uuid: e.uuid
// 	}
// })



// var employees = []

// for (const company of companies)
// {
// 	var e = await client.request(readItems ('User_Company', {
// 		fields: [
// 			'user.email', 'role.id', 'status', 'uuid'
// 		],
// 		filter: {
// 			_and:[
// 				{				
// 					company: {
// 						id: {
// 							_eq: company.id
// 						}
// 					}
// 				},
// 				{
// 					role: {
// 						_neq: 1
// 					}
// 				}	
// 			]
// 		}
// 	}))

// 	employees.push (e.map((item) => {
// 		return{
// 			user: item.user.email,
// 			role: item.role.id,
// 			status: item.status,
// 			uuid: item.uuid
// 		}
// 	}))
// }