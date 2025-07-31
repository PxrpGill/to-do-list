export const DETAIL_TODO_CONSTANTS = {
	convertTitle: (arg: number) => `Welcome to ${arg} todo's!`,
	convertCreator: (arg: number) =>
		`This todo's was created by user with id - ${arg}`,
	convertDescription: (arg: string) => `Todo description - <span>${arg}</span>`,
	convertCompleted: (arg: boolean) => {
		if (arg) return 'This todo was successfully completed';

		return 'This todo has not been completed yet';
	},
};
