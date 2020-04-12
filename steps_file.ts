// in this file you can append custom step methods to 'I' object

import ILocator = CodeceptJS.ILocator;

export = function() {
    return actor( {
        // Define custom steps here, use 'this' to access default methods of I.

        canSee: async function(selector: ILocator): Promise<boolean> {
            const numVisible = await this.grabNumberOfVisibleElements(selector);

            return !(numVisible === 0);
        }
    })
}
