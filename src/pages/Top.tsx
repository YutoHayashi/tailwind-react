import React from 'react';
import logo from '@/images/logo.svg';

export class Top extends React.Component<{  }, {  }> {
    public constructor( props: {  } ) {
        super( props );
    }
    public render(  ) {
        return (
            <>
                <div className={ `p-6 max-w-sm max-auto bg-white rounded-xl shadow-md flex items-center space-x-4` }>
                    <div className="flex-shrink-0">
                        <img src={ logo } alt="logo" className="h-12 w-12" />
                    </div>
                    <div>
                        <div className="text-x1 font-medium text-black">ChitChat</div>
                        <p className="text-gray-500">You have a new message!</p>
                    </div>
                </div>
            </>
        );
    }
}
