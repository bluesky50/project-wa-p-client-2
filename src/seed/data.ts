export const sessions = (): any[] => {
	const result = [];
	for (let i = 1; i < 10; i++) {
		result.push({
			description: `session-desc-${i}`,
			id: i,
			title: `session-title-${i}`,
		});
	}
	return result;
};
