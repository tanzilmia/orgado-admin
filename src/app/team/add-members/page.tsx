import CreateTeamMain from '@/components/team/create-team/CreateTeamMain';
import ContentWrapper from '@/layout/sidebar/ContentWrapper';
import React from 'react';

const CreateMemberPage = () => {
    return (
        <>
             <ContentWrapper breadCampTitle='Create Team'>
              <CreateTeamMain/>
            </ContentWrapper>
        </>
    );
};

export default CreateMemberPage;