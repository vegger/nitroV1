/* global module */

import { hot } from '@gondel/plugin-hot';

// hot module reloading
hot(module);
// only necessary if we don't use gondel hot reloading
// if (module.hot) { module.hot.accept() }

/* eslint-disable no-useless-escape */

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

// require all js files from 'proto/js' and'patterns/*/proto'
requireAll(require.context('./proto/js', true, /^.*(js)$/));
requireAll(require.context('./patterns', true, /[\/\\]proto[\/\\](?:[a-z0-9\-]+).(js)$/));

// require all css files from 'proto/css' and 'patterns/*/proto'
requireAll(require.context('./proto/css', true, /^.*(s?css)$/));
requireAll(require.context('./patterns', true, /[\/\\]proto[\/\\](?:[a-z0-9\-]+).(s?css)$/));

/* eslint-enable no-useless-escape */

// eslint-disable-next-line
import './proto/utils/develop-helpers';
