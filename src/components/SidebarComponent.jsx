import React from 'react';

const SidebarComponent = ({ playlists, onSelectPlaylist }) => (
  <div className="sidebar bg-gray-800 text-white p-4 h-screen">
    <h2 className="text-lg font-semibold mb-4">Playlists</h2>
    <ul>
      {playlists.map((playlist) => (
        <li
          key={playlist.id}
          onClick={() => onSelectPlaylist(playlist)}
          className="cursor-pointer hover:text-gray-300 mb-2"
        >
          {playlist.name}
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarComponent;
