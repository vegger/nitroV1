import './css/<%= pattern.file %>.scss';<% if (modifier.name) { %>
import './css/modifier/<%= pattern.file %>-<%= modifier.file %>.scss';<% } %>
import './js/<%= pattern.file %>';
