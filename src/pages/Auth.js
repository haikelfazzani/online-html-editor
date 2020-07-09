import React, { useEffect } from 'react';
import { DropboxAuth } from '../services/DropboxService';

export default function Auth (props) {

  useEffect(() => {
    DropboxAuth.setToken();
    props.history.push('/playground');
  }, []);

  return (<div>Loading..</div>);
}